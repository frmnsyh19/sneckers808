import "iron-session";

declare module "iron-session" {
  interface IronSessionData {
    cart?: { id: string; name: string; price: number; quantity: number }[];
  }
}
