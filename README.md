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

## Publicacion AWS

- Bucket S3: `mdt-landing-061051231398`
- URL publicada: `http://mdt-landing-061051231398.s3-website.mx-central-1.amazonaws.com`
- Region: `mx-central-1`
- Bucket para dominio raiz: `mdtracking.com`
- Endpoint raiz preparado: `http://mdtracking.com.s3-website.mx-central-1.amazonaws.com`
- Bucket para `www`: `www.mdtracking.com`, redirige a `http://mdtracking.com`

Nota: CloudFront fue la opcion recomendada para HTTPS/CDN con bucket privado, pero AWS rechazo crear la distribucion porque la cuenta requiere verificacion antes de agregar recursos CloudFront. Mientras se verifica la cuenta, el sitio queda publicado con S3 Static Website Hosting.

## DNS pendiente en Google Cloud DNS

Cuando se quiera reemplazar la pagina en construccion del dominio raiz:

- Cambiar `mdtracking.com.` de los registros A actuales de Squarespace a un registro `ALIAS` hacia `mdtracking.com.s3-website.mx-central-1.amazonaws.com.`
- Cambiar `www.mdtracking.com.` a un `CNAME` hacia `www.mdtracking.com.s3-website.mx-central-1.amazonaws.com.`

Google Cloud DNS soporta `ALIAS` en el apex, pero solo se puede configurar con `gcloud` o API, no desde la consola web.
