import Vibrant from 'node-vibrant';

type Color = {
  vibrant: string | null;
  muted: string | null;
  darkVibrant: string | null;
  darkMuted: string | null;
  lightVibrant: string | null;
  lightMuted: string | null;
};

const extractOverallColor = async (
  imageUrl: string
): Promise<{ dark: string | null; light: string | null } | null> => {
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);
    const palette = await Vibrant.from(imageBuffer).getPalette();
    const mutedColors = {
      dark: palette.DarkMuted?.hex || null,
      light: palette.LightMuted?.hex || null,
    };
    return mutedColors;
  } catch (error) {
    console.error('Error extracting color:', error);
    return null;
  }
};

export default extractOverallColor;
