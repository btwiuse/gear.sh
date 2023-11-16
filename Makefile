all:
	deno fmt *.js *.ts
	deno run -A merge.ts
	deno fmt *.json
