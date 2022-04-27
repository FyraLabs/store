import { PrintfulClient } from "printful-request";

export const printful = new PrintfulClient(process.env.PRINTFUL_API_KEY, {
  headers: {
    Authorization: 'Bearer ' + process.env.PRINTFUL_API_KEY,
  }
});
