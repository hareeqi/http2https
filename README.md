# http2https

Simple http to https 301 redirect server (default is 80 to 443)

## Install

```
npm i http2https -g
```
## run

```
http2https
```
note: you might need sudo to bind on 80 & 443

## extra configs
If you would like to redirect from a different source port and destination port (default 80 to 443). you can use arguments or environment variables 

```
http2https 8080 8443
```
