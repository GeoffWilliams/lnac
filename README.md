# LNAC — Lightning’s Not A CMS ⚡

LNAC is a stupid-fast static commerce + content engine built on Bun.  
No admin panels, no enterprise abstraction pyramids, no 1999 PHP CMS trauma.  
Just minimal files → blazing output → deploy anywhere.

- Tiny + transparent
- OSS + freedom first
- Ships HTML static
- Commerce extension friendly (JS native, no backend tax)

LNAC: Lightning’s Not A CMS
> Lightning’s Not A CMS. It’s the tool we always wanted.  
> Build faster than the excuses, ship before you finish your coffee.

![lnac.png](./lnac.png)

## Status


`concept`


## License

LNAC is licensed under **GPLv3**.  
Because commerce should stay free software, and nobody gets to close LNAC.

## Philosophy

We made LNAC because we were tired of being forced into overcomplicated CMSes, slow frameworks, and locked-in ecosystems.
It’s just files + speed + freedom. Fast enough that it feels like lightning.
Ship it. Own it. Keep it free.

## Suggested platform

Workstation:
* VSCode + Linux desktop
* Git
* [Bun](https://bun.com/)

Hosting:
* Raspberry Pi 5 8GB+ NGINX/spare PC
* Cloudflare Tunnel
* ...or your favorite cloud


## Quickstart

Workstation setup:
1. Install bun
2. Install vscode

```shell
mkdir ~/projects
cd ~/projects
git clone https://github.com/GeoffWilliams/lnac mycoolsite
code mycoolsite
```

Try it out:
1. In VScode, new terminal
2. Compile: `bun bin/build.ts`
3. Run local server: `bun build/server.ts`

Now head to [https://localhost:3000](https://localhost:3000)


A basic set of templates are installed to `/shop` - edit away :) Its bog standard HTML with [ETA](https://eta.js.org/) templates.

Running `build.ts` generates static files under `/dist`, these can be hosted properly with NGINX and then proxied with cloudflare, or you can deploy to AWS S3 or anywhere you like...

To add shopping cart functionality, plugin your favorite JavaScript API.



## raspberry pi (Debian) setup

## Nginx

```shell
sudo apt update && sudo apt install nginx
sudo chown geoff:geoff /var/www/html/ -R
```


## Deploy

```shell
# rsync to raspberry pi
make deploy
```