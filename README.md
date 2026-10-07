# Mobile Digital Tracking Landing

Landing page estatica para Mobile Digital Tracking.

## Paginas principales

- `index.html`: landing comercial principal.
- `pricing.html`: planes y precios de referencia.
- `faq.html`: preguntas frecuentes.
- `about.html`: contacto y solicitud de demo.
- `signin.html`: redireccion a `https://app.mdtracking.com`.
- `signup.html`: CTA de demo por correo.

## Contacto y plataforma

- Plataforma: `https://app.mdtracking.com`
- Contacto: `rarzola@mdtracking.com`

## Publicacion actual: Cloudflare Pages

- Proyecto: `mdt-landing`.
- URL HTTPS: https://mdt-landing-4br.pages.dev/
- Publicada el 2026-10-06 mediante Direct Upload: 42 archivos publicos (paginas principales y assets).
- No incluir `.git`, documentacion ni paginas demo en el paquete de publicacion.
- Dominios activos: mdtracking.com / www.mdtracking.com; CTA app.mdtracking.com.

## Publicacion AWS historica (cuenta suspendida)

- Bucket S3: `mdt-landing-061051231398`
- URL publicada: `http://mdt-landing-061051231398.s3-website.mx-central-1.amazonaws.com`
- Region: `mx-central-1`
- Bucket para dominio raiz: `mdtracking.com`
- Endpoint raiz preparado: `http://mdtracking.com.s3-website.mx-central-1.amazonaws.com`
- Bucket para `www`: `www.mdtracking.com`
- Certificado ACM: `arn:aws:acm:us-east-1:061051231398:certificate/8e5ed20f-d52e-430a-adf8-af1a564f592a`
- CloudFront distribution: `E2J633HGJW4TPU`
- CloudFront domain: `d11iwcccopk57h.cloudfront.net`

Nota: el sitio usa CloudFront con certificado ACM para HTTPS y origen S3 website. Cuando el DNS apunte a CloudFront, `https://mdtracking.com` y `https://www.mdtracking.com` deben responder el landing.

## DNS historico AWS (no aplicar; migracion a Cloudflare pendiente)

Para usar HTTPS con CloudFront:

- Cambiar `mdtracking.com.` de `ALIAS` S3 website a `ALIAS` hacia `d11iwcccopk57h.cloudfront.net.`
- Cambiar `www.mdtracking.com.` de `CNAME` S3 website a `CNAME` hacia `d11iwcccopk57h.cloudfront.net.`

Mantener los CNAME de validacion ACM mientras el certificado este en uso.

## Dependencias públicas (2026-10-06)

Las páginas públicas usan únicamente js/mdt.js para el menú móvil; no publicar jQuery, Bootstrap JS, main.js ni demos de la plantilla. Se conservan CSS de rejilla/reboot y estilos propios. Publicar las siete páginas principales (incluido404), css/fonts/icon/img y solo js/mdt.js. Menú móvil probado en390px.

