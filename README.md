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

Nota: CloudFront fue la opcion recomendada para HTTPS/CDN con bucket privado, pero AWS rechazo crear la distribucion porque la cuenta requiere verificacion antes de agregar recursos CloudFront. Mientras se verifica la cuenta, el sitio queda publicado con S3 Static Website Hosting.
