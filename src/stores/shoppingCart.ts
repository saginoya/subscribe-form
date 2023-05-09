import { defineStore } from "pinia";
import type { Item } from "@/types";

type State = {
  cart: Map<string, Item>;
};

export const useStoreShoppingCart = defineStore("shoppingCart", {
  state: (): State => {
    return {
      cart: new Map<string, Item>(),
    };
  },
  getters: {
    isEmpty: (state): boolean => {
      return state.cart.size === 0;
    },
    hasSameId: (state) => {
      return (id: string): boolean => state.cart.has(id);
    },
  },
  actions: {
    addToCart(id: string, number?: number, volume?: string): void {
      this.cart.set(id, {
        id: id,
        number: number ? number : 1,
        volume: volume ? volume : "",
      });
    },
    removeFromCart(id: string): void {
      this.cart.delete(id);
    },
    getItem(id: string) {
      return this.cart.get(id);
    },
    changeNumber(id: string, number: number): void {
      if (this.cart.has(id)) {
        const oldData = this.cart.get(id);
        this.cart.set(id, {
          id: id,
          number: number,
          volume: oldData ? oldData.volume : "",
        });
      }
    },
    changeVolume(id: string, volume: string): void {
      if (this.cart.has(id)) {
        const oldData = this.cart.get(id);
        this.cart.set(id, {
          id: id,
          number: oldData ? oldData.number : 1,
          volume: volume,
        });
      }
    },
  },
});
