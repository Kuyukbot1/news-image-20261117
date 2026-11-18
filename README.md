[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Kuyukbot1/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Kuyukbot1/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

# The World in One Day — Tuesday 17 November 2026

An entry for the [make.fun bounty](https://make.fun/bounty/news-image-20261117).

One 1024×1024 image summing up Tuesday 17 November 2026 in six stories:

1. **Crimea bridge hit in record drone barrage** — Ukraine fired 1,300 drones overnight, its largest yet; Russia hit bridges in Kyiv in reply.
2. **Iran strikes US radar base in Bahrain** — IRGC drones hit the US base at Sheikh Isa; a tanker was attacked in the Strait of Hormuz; the US struck a missile site on Qeshm Island.
3. **Quad leaders meet in Manila** — Trump, Modi, Takaichi and Albanese, the first Quad summit in two years, warn over economic coercion.
4. **A million stranded as US air travel melts down** — more than a million people stuck at airports across the US; the cause is still unclear.
5. **Hack hits BBC, CNN and 200 sites** — malicious code slipped in via Optimizely, trying to steal crypto and card data.
6. **Draft deal: quit fossil fuels faster** — the COP31 draft calls for "accelerated action" to exit oil, gas and coal.

The image is a newspaper poster drawn entirely in code (Python PIL): flat icons, a big date masthead, six labelled panels. `main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, so two runs write identical bytes.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
