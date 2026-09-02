import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Award,
  Camera,
  Download,
  Lock,
  Plus,
  QrCode,
  ScanLine,
  Star,
  Trophy,
  Upload,
  UserRound,
  Scissors,
} from "lucide-react";
import { AsgardMark } from "@/components/asgard-mark";
import { Card, Field, GhostBtn, GoldBtn, Shell, inputClass } from "@/components/shell";
import {
  ACTIONS,
  BARBERS,
  PIN,
  nextPrize,
  useLoyalty,
  type Prize,
} from "@/lib/loyalty-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const screen = useLoyalty((s) => s.screen);
  switch (screen) {
    case "client-gate":
      return <ClientGate />;
    case "client-home":
      return <ClientHome />;
    case "client-prizes":
      return <ClientPrizes />;
    case "client-mine":
      return <ClientMine />;
    case "barber-gate":
      return <BarberGate />;
    case "barber-menu":
      return <BarberMenu />;
    case "add-points":
      return <AddPoints />;
    case "manage-prizes":
      return <ManagePrizes />;
    case "backup":
      return <Backup />;
    case "scan-prize":
      return <ScanPrize />;
    default:
      return <Landing />;
  }
}

function Landing() {
  const go = useLoyalty((s) => s.go);
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col bg-bg px-5 py-10 text-fg">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mb-5 text-primary">
          <AsgardMark className="h-20 w-20" />
        </div>
        <p className="font-display text-xs tracking-[0.4em] text-muted">ESTUDIO</p>
        <h1 className="mt-1 font-display text-4xl font-semibold tracking-[0.18em] text-cream">ASGARD</h1>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
          Programa de puntos. Cada corte suma. Cada premio se gana.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3">
          <GoldBtn onClick={() => go("client-gate")}>
            <UserRound className="size-4" /> Soy cliente
          </GoldBtn>
          <GhostBtn onClick={() => go("barber-gate")}>
            <Scissors className="size-4" /> Soy barbero
          </GhostBtn>
        </div>
      </div>
      <p className="pb-2 text-center text-xs text-muted">Alta Gracia · Marcelo, Ulises y Alexis</p>
    </div>
  );
}

function ClientGate() {
  const go = useLoyalty((s) => s.go);
  const login = useLoyalty((s) => s.loginClient);
  const [dni, setDni] = useState("");
  const [err, setErr] = useState("");
  return (
    <Shell title="Mis puntos" onBack={() => go("home")}>
      <Card>
        <p className="mb-4 text-sm text-muted">Ingresá tu DNI para ver tu tarjeta ASGARD.</p>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const r = login(dni);
            if (!r.ok) setErr(r.error);
          }}
        >
          <Field label="DNI">
            <input
              className={inputClass}
              inputMode="numeric"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="30403722"
              autoComplete="off"
            />
          </Field>
          {err ? <p className="text-sm text-danger">{err}</p> : null}
          <GoldBtn type="submit">Entrar</GoldBtn>
        </form>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          Demo: DNI{" "}
          <button
            type="button"
            className="text-primary underline"
            onClick={() => {
              setDni("30403722");
              const r = login("30403722");
              if (!r.ok) setErr(r.error);
            }}
          >
            30403722
          </button>{" "}
          (Braian, 130 pts)
        </p>
      </Card>
    </Shell>
  );
}

function ClientHome() {
  const go = useLoyalty((s) => s.go);
  const logout = useLoyalty((s) => s.logout);
  const dni = useLoyalty((s) => s.sessionDni);
  const client = useLoyalty((s) => s.clients.find((c) => c.dni === dni));
  const prizes = useLoyalty((s) => s.prizes);
  const claimsAll = useLoyalty((s) => s.claims);
  const claims = claimsAll.filter((c) => c.dni === dni);
  if (!client) return null;
  const nxt = nextPrize(client.points, prizes);
  const progress = nxt ? Math.min(1, client.points / nxt.cost) : 1;
  const redeemable = prizes.filter((p) => client.points >= p.cost).length;
  return (
    <Shell title="Mis puntos" onBack={logout}>
      <div className="asgard-card relative overflow-hidden rounded-lg p-5 text-primary-fg">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">{client.name}</p>
            <p className="text-xs tracking-wider opacity-80">DNI {client.dni}</p>
          </div>
          <AsgardMark className="h-10 w-10 opacity-90" />
        </div>
        <p className="mt-6 text-xs tracking-[0.2em] uppercase opacity-80">Tus puntos</p>
        <p className="flex items-center gap-2 font-display text-5xl font-semibold">
          <Star className="size-7 fill-current" /> {client.points}
        </p>
        {nxt ? (
          <>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary-fg/20">
              <div className="h-full rounded-full bg-primary-fg" style={{ width: `${progress * 100}%` }} />
            </div>
            <p className="mt-2 text-xs opacity-80">
              {client.points}/{nxt.cost} para {nxt.name}
            </p>
          </>
        ) : null}
      </div>
      {redeemable > 0 ? (
        <p className="mt-4 text-center text-sm text-cream">
          Podés canjear {redeemable} premio{redeemable > 1 ? "s" : ""} con tus puntos.
        </p>
      ) : (
        <p className="mt-4 text-center text-sm text-muted">Seguí sumando. El próximo premio está cerca.</p>
      )}
      <div className="mt-5 space-y-3">
        <GoldBtn onClick={() => go("client-prizes")}>Ver premios</GoldBtn>
        <GhostBtn onClick={() => go("client-mine")}>
          Mis premios {claims.length ? `(${claims.length})` : ""}
        </GhostBtn>
      </div>
    </Shell>
  );
}

function ClientPrizes() {
  const go = useLoyalty((s) => s.go);
  const dni = useLoyalty((s) => s.sessionDni);
  const client = useLoyalty((s) => s.clients.find((c) => c.dni === dni));
  const prizes = useLoyalty((s) => s.prizes);
  const claimPrize = useLoyalty((s) => s.claimPrize);
  const [msg, setMsg] = useState("");
  if (!client) return null;
  return (
    <Shell title="Premios" onBack={() => go("client-home")}>
      <p className="mb-4 text-sm text-muted">Tenés {client.points} puntos. Canjeá y mostrá el código en el local.</p>
      {msg ? <p className="mb-3 text-sm text-cream">{msg}</p> : null}
      <div className="space-y-3">
        {prizes
          .slice()
          .sort((a, b) => a.cost - b.cost)
          .map((p) => {
            const ok = client.points >= p.cost;
            return (
              <Card key={p.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-fg">{p.name}</p>
                    <p className="text-xs text-muted">{p.detail}</p>
                  </div>
                  <span className="shrink-0 font-display text-sm text-primary">{p.cost} pts</span>
                </div>
                <button
                  type="button"
                  disabled={!ok}
                  onClick={() => {
                    const r = claimPrize(p.id);
                    if (r.ok) {
                      setMsg(`Canjeado. Código ${r.claim.code}`);
                      go("client-mine");
                    } else setMsg(r.error);
                  }}
                  className="mt-3 min-h-11 w-full rounded-md border border-primary/40 text-sm font-medium text-cream disabled:opacity-35"
                >
                  {ok ? "Canjear" : "Te faltan puntos"}
                </button>
              </Card>
            );
          })}
      </div>
    </Shell>
  );
}

function ClientMine() {
  const go = useLoyalty((s) => s.go);
  const dni = useLoyalty((s) => s.sessionDni);
  const claimsAll = useLoyalty((s) => s.claims);
  const claims = claimsAll.filter((c) => c.dni === dni);
  return (
    <Shell title="Mis premios" onBack={() => go("client-home")}>
      {claims.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">Todavía no canjeaste premios. Cuando lo hagas, acá aparece el código para el barbero.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {claims.map((c) => (
            <Card key={c.id}>
              <p className="font-medium">{c.prizeName}</p>
              <p className="mt-2 font-display text-3xl tracking-[0.3em] text-primary">{c.code}</p>
              <p className="mt-1 text-xs text-muted">
                {c.status === "pending" ? "Pendiente · mostralo en el local" : "Entregado"}
              </p>
            </Card>
          ))}
        </div>
      )}
    </Shell>
  );
}

function BarberGate() {
  const go = useLoyalty((s) => s.go);
  const login = useLoyalty((s) => s.loginBarber);
  const [pin, setPin] = useState("");
  const [barber, setBarber] = useState<(typeof BARBERS)[number]>(BARBERS[0]);
  const [err, setErr] = useState("");
  return (
    <Shell title="Barberos" onBack={() => go("home")}>
      <Card>
        <p className="mb-4 text-sm text-muted">Acceso del equipo ASGARD.</p>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!login(pin, barber)) setErr("PIN incorrecto");
          }}
        >
          <Field label="Quién atiende">
            <select
              className={inputClass}
              value={barber}
              onChange={(e) => setBarber(e.target.value as (typeof BARBERS)[number])}
            >
              {BARBERS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>
          <Field label="PIN">
            <input
              className={inputClass}
              inputMode="numeric"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
            />
          </Field>
          {err ? <p className="text-sm text-danger">{err}</p> : null}
          <GoldBtn type="submit">
            <Lock className="size-4" /> Entrar
          </GoldBtn>
        </form>
        <p className="mt-4 text-xs text-muted">PIN demo: {PIN}</p>
      </Card>
    </Shell>
  );
}

function BarberMenu() {
  const go = useLoyalty((s) => s.go);
  const logout = useLoyalty((s) => s.logout);
  const barber = useLoyalty((s) => s.barber);
  const items = [
    { s: "add-points" as const, title: "Sumar puntos", sub: "Cargar visita o acción", icon: Plus },
    { s: "manage-prizes" as const, title: "Administrar premios", sub: "Gestionar catálogo", icon: Trophy },
    { s: "scan-prize" as const, title: "Escanear premio", sub: "Entregar canje", icon: ScanLine },
    { s: "backup" as const, title: "Copia de seguridad", sub: "Exportar / restaurar", icon: Lock },
  ];
  return (
    <Shell title="Menú principal" onBack={logout}>
      <p className="mb-4 text-sm text-muted">Hola, {barber}.</p>
      <div className="space-y-3">
        {items.map((it) => (
          <button
            key={it.s}
            type="button"
            onClick={() => go(it.s)}
            className="flex w-full items-center gap-4 rounded-lg border border-border bg-surface p-4 text-left transition hover:border-primary/50"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <it.icon className="size-5" />
            </span>
            <span>
              <span className="block font-medium">{it.title}</span>
              <span className="text-xs text-muted">{it.sub}</span>
            </span>
          </button>
        ))}
      </div>
    </Shell>
  );
}

function AddPoints() {
  const go = useLoyalty((s) => s.go);
  const findClient = useLoyalty((s) => s.findClient);
  const addPoints = useLoyalty((s) => s.addPoints);
  const registerClient = useLoyalty((s) => s.registerClient);
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [manual, setManual] = useState("");
  const [msg, setMsg] = useState("");
  const client = useMemo(() => (dni ? findClient(dni) : undefined), [dni, findClient, msg]);

  function apply(delta: number, label: string) {
    const r = addPoints(dni, delta, label);
    setMsg(r.ok ? `Listo. ${r.client.name} quedó en ${r.client.points} pts.` : r.error);
  }

  return (
    <Shell title="Sumar puntos" onBack={() => go("barber-menu")}>
      <Card className="space-y-4">
        <Field label="DNI">
          <input
            className={inputClass}
            inputMode="numeric"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="Ingresá DNI"
          />
        </Field>
        {client ? (
          <div className="rounded-md border border-primary/30 bg-elevated p-3 text-sm">
            <p>
              Nombre: <strong>{client.name}</strong>
            </p>
            <p>Puntos actuales: {client.points}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <Field label="Nombre (si es nuevo)">
              <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre y apellido" />
            </Field>
            <GhostBtn
              onClick={() => {
                const r = registerClient(dni, name);
                setMsg(r.ok ? "Cliente creado. Ahora sumá puntos." : r.error);
              }}
            >
              Registrar cliente
            </GhostBtn>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2">
          {ACTIONS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => apply(a.points, a.label)}
              className="min-h-14 rounded-md bg-primary px-2 text-center text-xs font-semibold leading-tight text-primary-fg"
            >
              {a.label}
              <span className="mt-1 block text-sm">{a.points} pts</span>
            </button>
          ))}
        </div>
        <Field label="Cantidad de puntos">
          <input
            className={inputClass}
            inputMode="numeric"
            value={manual}
            onChange={(e) => setManual(e.target.value)}
            placeholder="Ej: 25"
          />
        </Field>
        <GoldBtn onClick={() => apply(Number(manual), "Carga manual")}>Sumar puntos manualmente</GoldBtn>
        <GhostBtn
          onClick={() => {
            setDni("30403722");
            setMsg("Escaneo simulado: Braian Cortez");
          }}
        >
          <Camera className="size-4" /> Simular escáner QR
        </GhostBtn>
        {msg ? <p className="text-sm text-cream">{msg}</p> : null}
      </Card>
    </Shell>
  );
}

function ManagePrizes() {
  const go = useLoyalty((s) => s.go);
  const prizes = useLoyalty((s) => s.prizes);
  const upsert = useLoyalty((s) => s.upsertPrize);
  const remove = useLoyalty((s) => s.removePrize);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("100");
  const [detail, setDetail] = useState("");
  return (
    <Shell title="Premios" onBack={() => go("barber-menu")}>
      <Card className="mb-4 space-y-3">
        <p className="font-medium">Nuevo premio</p>
        <Field label="Nombre">
          <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Puntos">
          <input className={inputClass} inputMode="numeric" value={cost} onChange={(e) => setCost(e.target.value)} />
        </Field>
        <Field label="Detalle">
          <input className={inputClass} value={detail} onChange={(e) => setDetail(e.target.value)} />
        </Field>
        <GoldBtn
          onClick={() => {
            if (!name.trim()) return;
            const p: Prize = {
              id: crypto.randomUUID(),
              name: name.trim(),
              cost: Number(cost) || 0,
              detail: detail.trim() || "Premio ASGARD",
            };
            upsert(p);
            setName("");
            setDetail("");
          }}
        >
          <Award className="size-4" /> Guardar
        </GoldBtn>
      </Card>
      <div className="space-y-3">
        {prizes.map((p) => (
          <Card key={p.id} className="flex items-center justify-between gap-3">
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-xs text-muted">{p.cost} pts · {p.detail}</p>
            </div>
            <button type="button" className="text-xs text-danger" onClick={() => remove(p.id)}>
              Quitar
            </button>
          </Card>
        ))}
      </div>
    </Shell>
  );
}

function Backup() {
  const go = useLoyalty((s) => s.go);
  const exportJson = useLoyalty((s) => s.exportJson);
  const importJson = useLoyalty((s) => s.importJson);
  const [raw, setRaw] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <Shell title="Copia de seguridad" onBack={() => go("barber-menu")}>
      <Card className="space-y-3">
        <p className="text-sm text-muted">Exportá los clientes y premios. En este demo queda en el dispositivo.</p>
        <GoldBtn
          onClick={() => {
            const data = exportJson();
            setRaw(data);
            void navigator.clipboard?.writeText(data);
            setMsg("Copiado al portapapeles");
          }}
        >
          <Download className="size-4" /> Export copia
        </GoldBtn>
        <textarea
          className={`${inputClass} min-h-40 py-3 font-mono text-xs`}
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder="Pegá un backup JSON para restaurar"
        />
        <GhostBtn
          onClick={() => {
            const r = importJson(raw);
            setMsg(r.ok ? "Restaurado" : r.error);
          }}
        >
          <Upload className="size-4" /> Restaurar
        </GhostBtn>
        {msg ? <p className="text-sm text-cream">{msg}</p> : null}
      </Card>
    </Shell>
  );
}

function ScanPrize() {
  const go = useLoyalty((s) => s.go);
  const deliver = useLoyalty((s) => s.deliverClaim);
  const claimsAll = useLoyalty((s) => s.claims);
  const pending = claimsAll.filter((c) => c.status === "pending");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <Shell title="Escanear premio" onBack={() => go("barber-menu")}>
      <Card className="space-y-4">
        <div className="flex justify-center text-primary">
          <QrCode className="size-16" />
        </div>
        <p className="text-center text-sm text-muted">Ingresá el código del cliente o tocá un canje pendiente.</p>
        <Field label="Código">
          <input
            className={`${inputClass} tracking-[0.3em] uppercase`}
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="ABC123"
          />
        </Field>
        <GoldBtn
          onClick={() => {
            const r = deliver(code);
            setMsg(r.ok ? `Premio escaneado: ${r.claim.prizeName}` : r.error);
          }}
        >
          Confirmar entrega
        </GoldBtn>
        {msg ? <p className="text-center text-sm text-cream">{msg}</p> : null}
      </Card>
      <p className="mt-5 mb-2 text-xs tracking-widest text-muted uppercase">Pendientes</p>
      <div className="space-y-2">
        {pending.length === 0 ? (
          <p className="text-sm text-muted">No hay canjes pendientes.</p>
        ) : (
          pending.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCode(c.code)}
              className="flex w-full items-center justify-between rounded-md border border-border bg-surface px-3 py-3 text-left"
            >
              <span>
                <span className="block text-sm">{c.prizeName}</span>
                <span className="text-xs text-muted">DNI {c.dni}</span>
              </span>
              <span className="font-display tracking-widest text-primary">{c.code}</span>
            </button>
          ))
        )}
      </div>
    </Shell>
  );
}
