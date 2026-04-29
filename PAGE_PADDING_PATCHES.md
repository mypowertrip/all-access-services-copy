# Page padding patches
#
# After applying the new src/App.jsx and src/index.css, the <main> wrapper
# applies `paddingTop: var(--site-nav-height)` which is breakpoint-responsive
# (6rem mobile, 7rem sm, 10.5rem md+). Every page that previously had its
# own `pt-40` / `mt-40` / `pt-32` will now double-pad. Apply these edits.
#
# Each block shows: filename → original line → replacement.
# All other content in those files stays the same.

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Reserve.jsx
# ─────────────────────────────────────────────────────────────────────────
# Two occurrences (success state + main flow). Both at:
#
#   <div className="min-h-screen bg-black font-inter pt-40">
# →
#   <div className="min-h-screen bg-black font-inter">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Locations.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="pt-40 pb-20">
# →
#   <section className="pt-12 md:pt-16 pb-20">
#
# (Some breathing room above the H1 — the wrapper handles nav clearance.)

# ─────────────────────────────────────────────────────────────────────────
# src/pages/About.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="relative pt-40 pb-24 overflow-hidden">
# →
#   <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Sales.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="pt-40 pb-12 bg-gradient-to-b from-black to-zinc-900/30">
# →
#   <section className="pt-12 md:pt-20 pb-12 bg-gradient-to-b from-black to-zinc-900/30">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Safety.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="relative pt-40 pb-24 overflow-hidden">
# →
#   <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Service.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="pt-40 pb-20">
# →
#   <section className="pt-12 md:pt-20 pb-20">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/Rentals.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <section className="relative w-screen h-96 flex items-center justify-center overflow-hidden mt-40">
# →
#   <section className="relative w-screen h-96 flex items-center justify-center overflow-hidden">

# ─────────────────────────────────────────────────────────────────────────
# src/pages/ProductDetail.jsx
# ─────────────────────────────────────────────────────────────────────────
#
#   <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-32 pb-8 md:pt-36 md:pb-12">
# →
#   <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-8 pb-8 md:pt-12 md:pb-12">
