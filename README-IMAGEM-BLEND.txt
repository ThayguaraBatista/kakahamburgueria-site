ATENÇÃO: IMAGEM DO BLEND PERSONALIZADA
========================================

A imagem do blend foi substituída pela imagem fornecida pelo usuário.

Na versão React (src/app/pages/Menu.tsx e src/app/pages/Orders.tsx):
- A imagem está importada usando: import blendImage from "figma:asset/46f1fbeeaaa3e18cd61ef6f1ad6099b16c26f45e.png";

Na versão HTML (html-version/menu-data.js):
- Como o HTML não tem acesso ao figma:asset, você precisa substituir a URL da imagem do blend manualmente.
- Localize o item com id: 20 (Blend) no arquivo menu-data.js
- Substitua a URL da propriedade "image" pela imagem que você quiser usar

OPÇÕES:
1. Upload a imagem para um servidor e use a URL pública
2. Converta a imagem em base64 e use data:image
3. Coloque a imagem na pasta html-version e use caminho relativo (ex: "blend.jpg")

Para usar a imagem localmente no HTML:
1. Salve a imagem do blend como "blend.jpg" na pasta html-version/
2. No arquivo menu-data.js, altere a linha do blend para:
   image: "blend.jpg",
