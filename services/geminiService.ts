
import { GoogleGenAI, Type } from "@google/genai";
import { HairCareRoutine } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    morning: {
      type: Type.ARRAY,
      description: "A list of steps for the morning hair care routine.",
      items: { type: Type.STRING }
    },
    evening: {
      type: Type.ARRAY,
      description: "A list of steps for the evening hair care routine.",
      items: { type: Type.STRING }
    },
    weekly: {
      type: Type.ARRAY,
      description: "A list of steps for a weekly special treatment.",
      items: { type: Type.STRING }
    },
    recommendedProducts: {
      type: Type.ARRAY,
      description: "A list of recommended product types and reasons for them.",
      items: {
        type: Type.OBJECT,
        properties: {
          productName: { 
            type: Type.STRING,
            description: "The generic name of the recommended product (e.g., 'Hydrating Shampoo', 'Leave-in Conditioner')."
          },
          reason: {
            type: Type.STRING,
            description: "A brief explanation of why this product is recommended for the user's hair."
          },
          type: {
            type: Type.STRING,
            description: "The category of the product (e.g., Shampoo, Conditioner, Treatment, Styling)."
          }
        },
        required: ["productName", "reason", "type"]
      }
    }
  },
  required: ["morning", "evening", "weekly", "recommendedProducts"]
};

export const getHairCareRoutine = async (hairType: string, concerns: string, goals: string): Promise<HairCareRoutine> => {
  const prompt = `
    As an expert hairstylist, create a personalized daily and weekly hair care routine for a user with the following characteristics:
    - Hair Type: ${hairType}
    - Main Concerns: ${concerns}
    - Hair Goals: ${goals}

    Provide a step-by-step morning, evening, and weekly routine.
    Also, recommend a list of product types (e.g., 'Volumizing Mousse', 'Deep Conditioner') that would be beneficial, explaining why each is suitable.
    Structure your response strictly as a JSON object matching the provided schema. Do not include any introductory text or markdown formatting.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const routine: HairCareRoutine = JSON.parse(jsonText);
    return routine;

  } catch (error) {
    console.error("Error generating hair care routine:", error);
    throw new Error("Failed to get a recommendation from our AI stylist. Please try again.");
  }
};
