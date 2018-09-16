export const BASE_PATH = 'assets';
const customFonts = {
  sanFrancisco: 'San Francisco',
};

export const fontWeight = { bold: 700, regular: 400, thin: 300 };

export const fontFamily = `'${customFonts.sanFrancisco}', system-ui, sans-serif !important`;

export const formInput = `
color: #000000;
`;

export const font_face = `
  @font-face {
      font-family: ${customFonts.sanFrancisco};
      font-display: swap;
      src: url(${BASE_PATH}/fonts/SF-Pro-Display-Semibold.eot)
          format("embedded-opentype"),
        url(${BASE_PATH}/fonts/SF-Pro-Display-Semibold.woff) format("woff"),
        url(${BASE_PATH}/fonts/SF-Pro-Display-Semibold.woff2) format("woff2"),
        url(${BASE_PATH}/fonts/SF-Pro-Display-Semibold.ttf) format("truetype"),
      font-weight: ${fontWeight.bold};
    }

    @font-face {
      font-family: ${customFonts.sanFrancisco};
      font-display: swap;
      src: url(${BASE_PATH}/fonts/SF-Pro-Text-Regular.eot)
          format("embedded-opentype"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Regular.woff) format("woff"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Regular.woff2) format("woff2"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Regular.ttf) format("truetype"),
      font-weight: ${fontWeight.regular};
    }

    @font-face {
      font-family: ${customFonts.sanFrancisco};
      font-display: swap;
      src: url(${BASE_PATH}/fonts/SF-Pro-Text-Light.eot)
          format("embedded-opentype"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Light.woff) format("woff"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Light.woff2) format("woff2"),
        url(${BASE_PATH}/fonts/SF-Pro-Text-Light.ttf) format("truetype"),
      font-weight: ${fontWeight.thin};
    }
  `;
