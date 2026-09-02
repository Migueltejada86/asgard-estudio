import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as QrCode, d as Download, f as Camera, l as Plus, m as ArrowLeft, n as Upload, o as Scissors, p as Award, r as Trophy, s as ScanLine, t as UserRound, u as Lock } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-4sbxe2Pv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AsgardMark({ className = "h-16 w-16" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M32 6c1.2 4.8 2.4 8.2 6.2 11.4 2.1-4.6 6.8-7.6 11.8-8.2-1.8 5.2-4.6 8.6-9.4 11.1 4.6 1.1 8.2 2.8 11.4 6.4-5.6.4-9.2-.4-13.2-3.2 1.8 4.2 2.2 8.1 1.4 13.2-3.4-3.1-5.8-6.6-8.2-11.4-2.4 4.8-4.8 8.3-8.2 11.4-.8-5.1-.4-9 1.4-13.2-4 2.8-7.6 3.6-13.2 3.2 3.2-3.6 6.8-5.3 11.4-6.4-4.8-2.5-7.6-5.9-9.4-11.1 5 .6 9.7 3.6 11.8 8.2C29.6 14.2 30.8 10.8 32 6z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M32 28.5c3.4 0 6.2 3.8 6.2 8.6 0 6.4-3.2 12.4-6.2 16.4-3-4-6.2-10-6.2-16.4 0-4.8 2.8-8.6 6.2-8.6z",
			opacity: "0.9"
		})]
	});
}
function Shell({ children, title, onBack, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-md flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-10 flex items-center gap-3 border-b border-border/80 bg-bg/90 px-4 py-3 backdrop-blur",
				children: [
					onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onBack,
						className: "inline-flex size-11 items-center justify-center rounded-md border border-border text-cream",
						"aria-label": "Volver",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-11" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "flex-1 text-center font-display text-sm font-semibold tracking-[0.22em] text-cream uppercase",
						children: title ?? "ASGARD"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-11" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 px-4 py-5",
				children
			}),
			footer
		]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-lg border border-border bg-surface p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${className}`,
		children
	});
}
function GoldBtn({ children, onClick, type = "button", disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		disabled,
		onClick,
		className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 font-semibold tracking-wide text-primary-fg transition hover:bg-cream disabled:opacity-40",
		children
	});
}
function GhostBtn({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary/50 px-4 font-medium tracking-wide text-cream transition hover:border-primary hover:bg-primary/10",
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium tracking-[0.16em] text-muted uppercase",
			children: label
		}), children]
	});
}
var inputClass = "min-h-12 w-full rounded-md border border-border bg-elevated px-3 text-fg outline-none placeholder:text-muted/70 focus:border-primary";
var ACTIONS = [
	{
		id: "corte",
		label: "Corte de pelo",
		points: 20
	},
	{
		id: "combo",
		label: "Corte + barba",
		points: 30
	},
	{
		id: "amigo",
		label: "Traer un amigo",
		points: 15
	},
	{
		id: "google",
		label: "Reseña en Google",
		points: 30
	},
	{
		id: "ig",
		label: "Historia en IG",
		points: 10
	},
	{
		id: "comunidad",
		label: "Unirte a la comunidad",
		points: 10
	}
];
var DEFAULT_PRIZES = [
	{
		id: "p1",
		name: "Perfilado gratis",
		cost: 80,
		detail: "Canjeable en tu próxima visita"
	},
	{
		id: "p2",
		name: "10% off en cortes",
		cost: 100,
		detail: "Descuento en un corte"
	},
	{
		id: "p3",
		name: "15% off en cortes",
		cost: 160,
		detail: "Descuento en un corte"
	},
	{
		id: "p4",
		name: "50% combo corte + barba",
		cost: 180,
		detail: "Mitad de precio en combo"
	},
	{
		id: "p5",
		name: "Corte gratis",
		cost: 250,
		detail: "Un corte completo de cortesía"
	}
];
var DEFAULT_CLIENTS = [
	{
		dni: "30403722",
		name: "Braian Cortez",
		points: 130
	},
	{
		dni: "35111222",
		name: "Lucas Méndez",
		points: 40
	},
	{
		dni: "28900411",
		name: "Diego Rivas",
		points: 210
	}
];
var PIN = "1234";
var BARBERS = [
	"Marcelo",
	"Ulises",
	"Alexis"
];
function code6() {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let s = "";
	for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * 32)];
	return s;
}
var useLoyalty = create()(persist((set, get) => ({
	screen: "home",
	clients: DEFAULT_CLIENTS,
	prizes: DEFAULT_PRIZES,
	claims: [],
	ledger: [],
	sessionDni: null,
	barber: null,
	go: (screen) => set({ screen }),
	loginClient: (dni) => {
		const clean = dni.replace(/\D/g, "");
		const c = get().clients.find((x) => x.dni === clean);
		if (!c) return {
			ok: false,
			error: "No encontramos ese DNI. Pedile al barbero que te sume la primera visita."
		};
		set({
			sessionDni: c.dni,
			screen: "client-home"
		});
		return { ok: true };
	},
	registerClient: (dni, name) => {
		const clean = dni.replace(/\D/g, "");
		const n = name.trim();
		if (clean.length < 7) return {
			ok: false,
			error: "DNI inválido"
		};
		if (n.length < 3) return {
			ok: false,
			error: "Ingresá el nombre completo"
		};
		if (get().clients.some((x) => x.dni === clean)) return {
			ok: false,
			error: "Ese DNI ya está cargado"
		};
		const client = {
			dni: clean,
			name: n,
			points: 0
		};
		set((s) => ({ clients: [...s.clients, client] }));
		return { ok: true };
	},
	loginBarber: (pin, barber) => {
		if (pin !== "1234") return false;
		if (!BARBERS.includes(barber)) return false;
		set({
			barber,
			screen: "barber-menu"
		});
		return true;
	},
	logout: () => set({
		screen: "home",
		sessionDni: null,
		barber: null
	}),
	findClient: (dni) => get().clients.find((c) => c.dni === dni.replace(/\D/g, "")),
	addPoints: (dni, delta, label) => {
		const clean = dni.replace(/\D/g, "");
		if (!Number.isFinite(delta) || delta === 0) return {
			ok: false,
			error: "Cantidad inválida"
		};
		const client = get().clients.find((c) => c.dni === clean);
		if (!client) return {
			ok: false,
			error: "Cliente no encontrado. Registralo primero."
		};
		const next = {
			...client,
			points: Math.max(0, client.points + delta)
		};
		const entry = {
			id: crypto.randomUUID(),
			dni: clean,
			label,
			delta,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			barber: get().barber ?? "ASGARD"
		};
		set((s) => ({
			clients: s.clients.map((c) => c.dni === clean ? next : c),
			ledger: [entry, ...s.ledger].slice(0, 400)
		}));
		return {
			ok: true,
			client: next
		};
	},
	claimPrize: (prizeId) => {
		const dni = get().sessionDni;
		if (!dni) return {
			ok: false,
			error: "Sesión vencida"
		};
		const prize = get().prizes.find((p) => p.id === prizeId);
		const client = get().clients.find((c) => c.dni === dni);
		if (!prize || !client) return {
			ok: false,
			error: "Premio no disponible"
		};
		if (client.points < prize.cost) return {
			ok: false,
			error: "Todavía no te alcanzan los puntos"
		};
		if (get().claims.find((c) => c.dni === dni && c.prizeId === prizeId && c.status === "pending")) return {
			ok: false,
			error: "Ya tenés este premio pendiente de canje"
		};
		const claim = {
			id: crypto.randomUUID(),
			dni,
			prizeId,
			prizeName: prize.name,
			code: code6(),
			status: "pending",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set((s) => ({
			clients: s.clients.map((c) => c.dni === dni ? {
				...c,
				points: c.points - prize.cost
			} : c),
			claims: [claim, ...s.claims],
			ledger: [{
				id: crypto.randomUUID(),
				dni,
				label: `Canje: ${prize.name}`,
				delta: -prize.cost,
				at: (/* @__PURE__ */ new Date()).toISOString(),
				barber: "cliente"
			}, ...s.ledger]
		}));
		return {
			ok: true,
			claim
		};
	},
	deliverClaim: (code) => {
		const c = get().claims.find((x) => x.code.toUpperCase() === code.trim().toUpperCase());
		if (!c) return {
			ok: false,
			error: "Código no válido"
		};
		if (c.status === "delivered") return {
			ok: false,
			error: "Ese premio ya fue entregado"
		};
		const next = {
			...c,
			status: "delivered"
		};
		set((s) => ({ claims: s.claims.map((x) => x.id === c.id ? next : x) }));
		return {
			ok: true,
			claim: next
		};
	},
	upsertPrize: (p) => set((s) => {
		return { prizes: s.prizes.some((x) => x.id === p.id) ? s.prizes.map((x) => x.id === p.id ? p : x) : [...s.prizes, p] };
	}),
	removePrize: (id) => set((s) => ({ prizes: s.prizes.filter((p) => p.id !== id) })),
	exportJson: () => JSON.stringify({
		clients: get().clients,
		prizes: get().prizes,
		claims: get().claims,
		ledger: get().ledger
	}, null, 2),
	importJson: (raw) => {
		try {
			const data = JSON.parse(raw);
			if (!Array.isArray(data.clients) || !Array.isArray(data.prizes)) return {
				ok: false,
				error: "Archivo incompleto"
			};
			set({
				clients: data.clients,
				prizes: data.prizes,
				claims: data.claims ?? [],
				ledger: data.ledger ?? []
			});
			return { ok: true };
		} catch {
			return {
				ok: false,
				error: "JSON inválido"
			};
		}
	}
}), {
	name: "asgard-puntos-v1",
	partialize: (s) => ({
		clients: s.clients,
		prizes: s.prizes,
		claims: s.claims,
		ledger: s.ledger
	})
}));
function nextPrize(points, prizes) {
	const sorted = [...prizes].sort((a, b) => a.cost - b.cost);
	return sorted.find((p) => p.cost > points) ?? sorted[sorted.length - 1];
}
function Home() {
	switch (useLoyalty((s) => s.screen)) {
		case "client-gate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientGate, {});
		case "client-home": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientHome, {});
		case "client-prizes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientPrizes, {});
		case "client-mine": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientMine, {});
		case "barber-gate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarberGate, {});
		case "barber-menu": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarberMenu, {});
		case "add-points": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPoints, {});
		case "manage-prizes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagePrizes, {});
		case "backup": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backup, {});
		case "scan-prize": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanPrize, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
	}
}
function Landing() {
	const go = useLoyalty((s) => s.go);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col bg-bg px-5 py-10 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AsgardMark, { className: "h-20 w-20" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.4em] text-muted",
					children: "ESTUDIO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl font-semibold tracking-[0.18em] text-cream",
					children: "ASGARD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
					children: "Programa de puntos. Cada corte suma. Cada premio se gana."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex w-full flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GoldBtn, {
						onClick: () => go("client-gate"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }), " Soy cliente"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
						onClick: () => go("barber-gate"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scissors, { className: "size-4" }), " Soy barbero"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pb-2 text-center text-xs text-muted",
			children: "Alta Gracia · Marcelo, Ulises y Alexis"
		})]
	});
}
function ClientGate() {
	const go = useLoyalty((s) => s.go);
	const login = useLoyalty((s) => s.loginClient);
	const [dni, setDni] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: "Mis puntos",
		onBack: () => go("home"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: "Ingresá tu DNI para ver tu tarjeta ASGARD."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					const r = login(dni);
					if (!r.ok) setErr(r.error);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "DNI",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							inputMode: "numeric",
							value: dni,
							onChange: (e) => setDni(e.target.value),
							placeholder: "30403722",
							autoComplete: "off"
						})
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: err
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldBtn, {
						type: "submit",
						children: "Entrar"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs leading-relaxed text-muted",
				children: [
					"Demo: DNI",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-primary underline",
						onClick: () => {
							setDni("30403722");
							const r = login("30403722");
							if (!r.ok) setErr(r.error);
						},
						children: "30403722"
					}),
					" ",
					"(Braian, 130 pts)"
				]
			})
		] })
	});
}
function ClientHome() {
	const go = useLoyalty((s) => s.go);
	const logout = useLoyalty((s) => s.logout);
	const dni = useLoyalty((s) => s.sessionDni);
	const client = useLoyalty((s) => s.clients.find((c) => c.dni === dni));
	const prizes = useLoyalty((s) => s.prizes);
	const claims = useLoyalty((s) => s.claims).filter((c) => c.dni === dni);
	if (!client) return null;
	const nxt = nextPrize(client.points, prizes);
	const progress = nxt ? Math.min(1, client.points / nxt.cost) : 1;
	const redeemable = prizes.filter((p) => client.points >= p.cost).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Mis puntos",
		onBack: logout,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "asgard-card relative overflow-hidden rounded-lg p-5 text-primary-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold tracking-wide",
							children: client.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-wider opacity-80",
							children: ["DNI ", client.dni]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AsgardMark, { className: "h-10 w-10 opacity-90" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs tracking-[0.2em] uppercase opacity-80",
						children: "Tus puntos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-5xl font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-7 fill-current" }),
							" ",
							client.points
						]
					}),
					nxt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-2 overflow-hidden rounded-full bg-primary-fg/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary-fg",
							style: { width: `${progress * 100}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs opacity-80",
						children: [
							client.points,
							"/",
							nxt.cost,
							" para ",
							nxt.name
						]
					})] }) : null
				]
			}),
			redeemable > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-center text-sm text-cream",
				children: [
					"Podés canjear ",
					redeemable,
					" premio",
					redeemable > 1 ? "s" : "",
					" con tus puntos."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-sm text-muted",
				children: "Seguí sumando. El próximo premio está cerca."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldBtn, {
					onClick: () => go("client-prizes"),
					children: "Ver premios"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
					onClick: () => go("client-mine"),
					children: ["Mis premios ", claims.length ? `(${claims.length})` : ""]
				})]
			})
		]
	});
}
function ClientPrizes() {
	const go = useLoyalty((s) => s.go);
	const dni = useLoyalty((s) => s.sessionDni);
	const client = useLoyalty((s) => s.clients.find((c) => c.dni === dni));
	const prizes = useLoyalty((s) => s.prizes);
	const claimPrize = useLoyalty((s) => s.claimPrize);
	const [msg, setMsg] = (0, import_react.useState)("");
	if (!client) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Premios",
		onBack: () => go("client-home"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 text-sm text-muted",
				children: [
					"Tenés ",
					client.points,
					" puntos. Canjeá y mostrá el código en el local."
				]
			}),
			msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-cream",
				children: msg
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: prizes.slice().sort((a, b) => a.cost - b.cost).map((p) => {
					const ok = client.points >= p.cost;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-fg",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: p.detail
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 font-display text-sm text-primary",
							children: [p.cost, " pts"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !ok,
						onClick: () => {
							const r = claimPrize(p.id);
							if (r.ok) {
								setMsg(`Canjeado. Código ${r.claim.code}`);
								go("client-mine");
							} else setMsg(r.error);
						},
						className: "mt-3 min-h-11 w-full rounded-md border border-primary/40 text-sm font-medium text-cream disabled:opacity-35",
						children: ok ? "Canjear" : "Te faltan puntos"
					})] }, p.id);
				})
			})
		]
	});
}
function ClientMine() {
	const go = useLoyalty((s) => s.go);
	const dni = useLoyalty((s) => s.sessionDni);
	const claims = useLoyalty((s) => s.claims).filter((c) => c.dni === dni);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: "Mis premios",
		onBack: () => go("client-home"),
		children: claims.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Todavía no canjeaste premios. Cuando lo hagas, acá aparece el código para el barbero."
		}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: c.prizeName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-3xl tracking-[0.3em] text-primary",
					children: c.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: c.status === "pending" ? "Pendiente · mostralo en el local" : "Entregado"
				})
			] }, c.id))
		})
	});
}
function BarberGate() {
	const go = useLoyalty((s) => s.go);
	const login = useLoyalty((s) => s.loginBarber);
	const [pin, setPin] = (0, import_react.useState)("");
	const [barber, setBarber] = (0, import_react.useState)(BARBERS[0]);
	const [err, setErr] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: "Barberos",
		onBack: () => go("home"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: "Acceso del equipo ASGARD."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					if (!login(pin, barber)) setErr("PIN incorrecto");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Quién atiende",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: inputClass,
							value: barber,
							onChange: (e) => setBarber(e.target.value),
							children: BARBERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b,
								children: b
							}, b))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "PIN",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							inputMode: "numeric",
							type: "password",
							value: pin,
							onChange: (e) => setPin(e.target.value),
							placeholder: "••••"
						})
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: err
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GoldBtn, {
						type: "submit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }), " Entrar"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-muted",
				children: ["PIN demo: ", PIN]
			})
		] })
	});
}
function BarberMenu() {
	const go = useLoyalty((s) => s.go);
	const logout = useLoyalty((s) => s.logout);
	const barber = useLoyalty((s) => s.barber);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Menú principal",
		onBack: logout,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-sm text-muted",
			children: [
				"Hola, ",
				barber,
				"."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: [
				{
					s: "add-points",
					title: "Sumar puntos",
					sub: "Cargar visita o acción",
					icon: Plus
				},
				{
					s: "manage-prizes",
					title: "Administrar premios",
					sub: "Gestionar catálogo",
					icon: Trophy
				},
				{
					s: "scan-prize",
					title: "Escanear premio",
					sub: "Entregar canje",
					icon: ScanLine
				},
				{
					s: "backup",
					title: "Copia de seguridad",
					sub: "Exportar / restaurar",
					icon: Lock
				}
			].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go(it.s),
				className: "flex w-full items-center gap-4 rounded-lg border border-border bg-surface p-4 text-left transition hover:border-primary/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: it.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: it.sub
				})] })]
			}, it.s))
		})]
	});
}
function AddPoints() {
	const go = useLoyalty((s) => s.go);
	const findClient = useLoyalty((s) => s.findClient);
	const addPoints = useLoyalty((s) => s.addPoints);
	const registerClient = useLoyalty((s) => s.registerClient);
	const [dni, setDni] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [manual, setManual] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const client = (0, import_react.useMemo)(() => dni ? findClient(dni) : void 0, [
		dni,
		findClient,
		msg
	]);
	function apply(delta, label) {
		const r = addPoints(dni, delta, label);
		setMsg(r.ok ? `Listo. ${r.client.name} quedó en ${r.client.points} pts.` : r.error);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: "Sumar puntos",
		onBack: () => go("barber-menu"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "DNI",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						inputMode: "numeric",
						value: dni,
						onChange: (e) => setDni(e.target.value),
						placeholder: "Ingresá DNI"
					})
				}),
				client ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-primary/30 bg-elevated p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Nombre: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: client.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Puntos actuales: ", client.points] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Nombre (si es nuevo)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputClass,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Nombre y apellido"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: () => {
							const r = registerClient(dni, name);
							setMsg(r.ok ? "Cliente creado. Ahora sumá puntos." : r.error);
						},
						children: "Registrar cliente"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: ACTIONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => apply(a.points, a.label),
						className: "min-h-14 rounded-md bg-primary px-2 text-center text-xs font-semibold leading-tight text-primary-fg",
						children: [a.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-sm",
							children: [a.points, " pts"]
						})]
					}, a.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cantidad de puntos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						inputMode: "numeric",
						value: manual,
						onChange: (e) => setManual(e.target.value),
						placeholder: "Ej: 25"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldBtn, {
					onClick: () => apply(Number(manual), "Carga manual"),
					children: "Sumar puntos manualmente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
					onClick: () => {
						setDni("30403722");
						setMsg("Escaneo simulado: Braian Cortez");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), " Simular escáner QR"]
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-cream",
					children: msg
				}) : null
			]
		})
	});
}
function ManagePrizes() {
	const go = useLoyalty((s) => s.go);
	const prizes = useLoyalty((s) => s.prizes);
	const upsert = useLoyalty((s) => s.upsertPrize);
	const remove = useLoyalty((s) => s.removePrize);
	const [name, setName] = (0, import_react.useState)("");
	const [cost, setCost] = (0, import_react.useState)("100");
	const [detail, setDetail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Premios",
		onBack: () => go("barber-menu"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-4 space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Nuevo premio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nombre",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: name,
						onChange: (e) => setName(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Puntos",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						inputMode: "numeric",
						value: cost,
						onChange: (e) => setCost(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Detalle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputClass,
						value: detail,
						onChange: (e) => setDetail(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GoldBtn, {
					onClick: () => {
						if (!name.trim()) return;
						const p = {
							id: crypto.randomUUID(),
							name: name.trim(),
							cost: Number(cost) || 0,
							detail: detail.trim() || "Premio ASGARD"
						};
						upsert(p);
						setName("");
						setDetail("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }), " Guardar"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: prizes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						p.cost,
						" pts · ",
						p.detail
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-danger",
					onClick: () => remove(p.id),
					children: "Quitar"
				})]
			}, p.id))
		})]
	});
}
function Backup() {
	const go = useLoyalty((s) => s.go);
	const exportJson = useLoyalty((s) => s.exportJson);
	const importJson = useLoyalty((s) => s.importJson);
	const [raw, setRaw] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: "Copia de seguridad",
		onBack: () => go("barber-menu"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Exportá los clientes y premios. En este demo queda en el dispositivo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GoldBtn, {
					onClick: () => {
						const data = exportJson();
						setRaw(data);
						navigator.clipboard?.writeText(data);
						setMsg("Copiado al portapapeles");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export copia"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: `${inputClass} min-h-40 py-3 font-mono text-xs`,
					value: raw,
					onChange: (e) => setRaw(e.target.value),
					placeholder: "Pegá un backup JSON para restaurar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
					onClick: () => {
						const r = importJson(raw);
						setMsg(r.ok ? "Restaurado" : r.error);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), " Restaurar"]
				}),
				msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-cream",
					children: msg
				}) : null
			]
		})
	});
}
function ScanPrize() {
	const go = useLoyalty((s) => s.go);
	const deliver = useLoyalty((s) => s.deliverClaim);
	const pending = useLoyalty((s) => s.claims).filter((c) => c.status === "pending");
	const [code, setCode] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: "Escanear premio",
		onBack: () => go("barber-menu"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-16" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-muted",
						children: "Ingresá el código del cliente o tocá un canje pendiente."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Código",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: `${inputClass} tracking-[0.3em] uppercase`,
							value: code,
							onChange: (e) => setCode(e.target.value.toUpperCase()),
							placeholder: "ABC123"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldBtn, {
						onClick: () => {
							const r = deliver(code);
							setMsg(r.ok ? `Premio escaneado: ${r.claim.prizeName}` : r.error);
						},
						children: "Confirmar entrega"
					}),
					msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-cream",
						children: msg
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 mb-2 text-xs tracking-widest text-muted uppercase",
				children: "Pendientes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: pending.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No hay canjes pendientes."
				}) : pending.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCode(c.code),
					className: "flex w-full items-center justify-between rounded-md border border-border bg-surface px-3 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm",
						children: c.prizeName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: ["DNI ", c.dni]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display tracking-widest text-primary",
						children: c.code
					})]
				}, c.id))
			})
		]
	});
}
//#endregion
export { Home as component };
