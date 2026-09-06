/**
 * Lista local de productos — Fashion Intimate
 *
 * Editá acá el stock de cada color y pedime "sincronizá el stock" para
 * aplicar los cambios en la base de datos de la tienda.
 * Los `id` son los identificadores reales en la base: no los cambies.
 */

export type ProductVariantData = {
  id: string;
  color: string;
  colorHex: string | null;
  /** Unidades disponibles de este color */
  stock: number;
  active: boolean;
};

export type ProductData = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string | null;
  featured: boolean;
  active: boolean;
  variants: ProductVariantData[];
};

export const PRODUCTS: ProductData[] = [
  {
    id: "93662d11-6c6d-4315-9c4b-bc295c07bd37",
    name: "Conjunto armado negro (talle 95)",
    category: "lenceria",
    price: 10500,
    image: "/products/lenceria-negro-95.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "0f0cbca9-1875-4d24-98d0-be0347eec6ff", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "6b6046b4-2443-4820-8bef-67a09fda3719",
    name: "Conjunto armado gris (talle 100)",
    category: "lenceria",
    price: 10500,
    image: "/products/lenceria-gris-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "d81559b7-f671-44f5-a467-9a35854b98f9", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "3ba6bd16-e9ea-4962-ba22-5c5eba133332",
    name: "Conjunto armado negro (talle 100)",
    category: "lenceria",
    price: 10500,
    image: "/products/lenceria-negro-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "349a6527-15f1-481f-8cba-db041ccd8973", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "53e53100-344b-4f96-8753-ed5b6c513429",
    name: "Conjunto armado blanco (talle 100)",
    category: "lenceria",
    price: 10500,
    image: "/products/lenceria-blanco-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "8c2b15b7-79cd-4252-ba7c-6aba0adb2bc1", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "ba5709b3-76a3-480a-90b5-c95ff522fb0f",
    name: "Conjunto armado beige (talle 100)",
    category: "lenceria",
    price: 10500,
    image: "/products/lenceria-beige-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "226768ed-707a-477c-b0cb-43db2d02355b", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "6f9e0137-42db-40e9-9616-8050b43c0419",
    name: "Conjunto armado gris (talle 90)",
    category: "lenceria",
    price: 14500,
    image: "/products/lenceria-gris-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "9fb1b32a-cbdd-4395-bd0f-15cda38beaee", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "1420f72c-ae3d-447c-a5db-5bb7a5be9fc6",
    name: "Conjunto con aro blanco (talle 100)",
    category: "lenceria",
    price: 13500,
    image: "/products/lenceria-blanco-aro-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "06574fe1-6f30-4e80-a628-9faab0ee1d48", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "f78129c1-d676-41f7-864e-900d88f54e6e",
    name: "Conjunto con aro lila (talle 90)",
    category: "lenceria",
    price: 13500,
    image: "/products/lenceria-lila-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "dff1280d-9a33-470d-8282-85cfac4cd69d", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "44ba1b58-815c-46ed-91cf-4306da27ec5e",
    name: "Conjunto de morley negro (talle 90)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-morley-negro-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "39c8abf4-73dc-4e3a-804e-4919a42fdf27", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "90cc8082-1ab3-4ed1-b023-2e5b3fa2e34b",
    name: "Conjunto de encaje negro (talle 90)",
    category: "lenceria",
    price: 19000,
    image: "/products/lenceria-encaje-negro-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "6b2a814f-9c19-4e7e-8b69-80df6b8ec01a", color: "Negro (Talle 90)", colorHex: "#111111", stock: 1, active: true },
    ],
  },
  {
    id: "db31e738-14aa-4a81-afe3-2c6ab4b19110",
    name: "Conjunto de encaje crema (talle 90)",
    category: "lenceria",
    price: 19000,
    image: "/products/lenceria-encaje-crema-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "5e099098-e34e-4160-9eb9-91f3b589f0a2", color: "Crema (Talle 90)", colorHex: "#F3E9D7", stock: 1, active: true },
    ],
  },
  {
    id: "90eac9d8-a8d3-4c8a-9148-c1321816b8fd",
    name: "Conjunto de lycra con encaje blanco (talle 100)",
    category: "lenceria",
    price: 8000,
    image: "/products/lenceria-lycra-encaje-blanco-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "1a44ba54-ad1c-482b-9658-ac162d776dca", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "f7fe6e5b-0a78-4c6d-911c-58f8f319d4f6",
    name: "Conjunto negro (talle 100)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-negro-100-v2.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "18be0f4a-c633-4236-917a-7ba88683ca8f", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "7b435858-b3f2-4df0-8a49-5b1eba192cd1",
    name: "Conjunto negro (talle 2XL/5)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-negro-2xl.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "7295a9fa-abd9-4615-9eea-5680a13e7016", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "f4a78303-958f-4137-a95a-393ddb8f9615",
    name: "Conjunto blanco de encaje (talle 4)",
    category: "lenceria",
    price: 19500,
    image: "/products/lenceria-blanco-encaje-xl.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "b22e1466-22c6-413c-8a4f-1e675c9e043b", color: "Blanco (Talle 4)", colorHex: "#FFFFFF", stock: 1, active: true },
    ],
  },
  {
    id: "cab37912-133c-40fd-af3a-9d66e3757345",
    name: "Conjunto blanco (talle L)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-blanco-l.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "0a2cad09-bcae-44ea-88e6-873f7730aa61", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "7ebf5278-fe10-4f98-9149-43dea3ed0091",
    name: "Conjunto con estrellitas blanco (algodón con encaje, talle 2XL)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-estrellitas-blanco-2xl.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "f218ea85-caf5-47b2-a788-000b56cf7e4e", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "205f5476-f5c5-4b5a-bf6a-e2f5cbacd591",
    name: "Conjunto negro (talle L)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-negro-l.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "4ae1775f-0961-45ec-b8fa-6192bc069ec8", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "dc4a90bb-2fc0-4714-9d85-a0557f3d497b",
    name: "Conjunto de algodón (color gris, talle 90)",
    category: "lenceria",
    price: 12500,
    image: "/products/lenceria-algodon-gris-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "d595e3ce-46bb-45d2-a0cc-0bfc88229b85", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "8b5835bf-40ba-4f7b-9ca9-4bb0d53520c4",
    name: "Conjunto con aro y encaje rosa (talle 90)",
    category: "lenceria",
    price: 20000,
    image: "/products/lenceria-rosa-aro-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "da492e87-b7da-4712-86c7-f3d060f4a100", color: "Rosa (Talle 90)", colorHex: "#F4C2C2", stock: 1, active: true },
    ],
  },
  {
    id: "a0cd6d9f-7c01-4c1e-8b6e-e9003deb56e4",
    name: "Conjunto con tiritas blanco (talle 85 y 95)",
    category: "lenceria",
    price: 9000,
    image: "/products/lenceria-tiritas-blanco-85-95.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "1f269308-6c5f-4413-b4ce-1a0fc97206de", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "e54ab6fc-f0f0-40d6-a126-30ac123ed00b",
    name: "Conjunto bordó de algodón con encaje (talle 95)",
    category: "lenceria",
    price: 19000,
    image: "/products/lenceria-bordo-95.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "6241dbea-0b7a-48be-9f53-53910d952f36", color: "Bordó (Talle 95)", colorHex: "#6D071A", stock: 1, active: true },
    ],
  },
  {
    id: "1ce2ae7a-c705-4091-9743-a5119e4458bc",
    name: "Conjunto gris con encaje (talle 95)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-gris-encaje-95.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "c084b6da-0f47-4f34-ba36-9f6b5aaf4b15", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "7ff361c9-aaf1-4182-bb85-c4b451b074c1",
    name: "Conjunto de cebra (talle 90)",
    category: "lenceria",
    price: 18000,
    image: "/products/lenceria-cebra-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "af43d35f-e8fc-45dd-8aa5-7c9302b4ab94", color: "Estampado Cebra (Talle 90)", colorHex: null, stock: 1, active: true },
    ],
  },
  {
    id: "c46a3523-2bfe-471c-a0b8-89a543d26ce5",
    name: "Conjunto gris topo (talle 100/XL)",
    category: "lenceria",
    price: 10000,
    image: "/products/lenceria-gris-topo-100.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "bf499259-36ee-47ce-8976-9253d2416b65", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "a1773565-eb1b-4a80-819b-cf7413015437",
    name: "Conjunto gris armado (talle 90)",
    category: "lenceria",
    price: 18000,
    image: "/products/lenceria-gris-armado-90.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "1788ac11-75e7-4531-b467-9e10df57feeb", color: "Gris (Talle 90)", colorHex: "#9CA3AF", stock: 1, active: true },
    ],
  },
  {
    id: "21f3611e-17db-4a49-9ecc-4c8c0c9b22a1",
    name: "Conjunto con aro y encaje (color beige, talle 85-95)",
    category: "lenceria",
    price: 11000,
    image: "/products/lenceria-aro-encaje-beige-v2.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "be672341-353a-42d1-9473-d272753ec2fb", color: "Único", colorHex: null, stock: 9, active: true },
    ],
  },
  {
    id: "3c9d93cf-2375-4019-8ad5-3cb5becb716d",
    name: "Cola less estampadas de lycra",
    category: "bombachas",
    price: 3000,
    image: "/products/colaless-estampadas-lycra-nueva.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "46f99f16-d65c-4b4f-9cb9-3ff6d5e85d58", color: "Rosa", colorHex: "#EC4899", stock: 2, active: true },
      { id: "fc0a0885-4e07-47db-80f8-ad566700ca32", color: "Cebra", colorHex: null, stock: 2, active: true },
      { id: "74f6fb18-4c63-46f0-9c4e-d58a7a9714a4", color: "Celeste", colorHex: "#7DD3FC", stock: 2, active: true },
      { id: "e8e41db4-223e-4c55-af27-2bd0963fdb1a", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
    ],
  },
  {
    id: "23dfc53f-a979-4a51-bb30-ac163ff84a7e",
    name: "Cola less de algodón tira fina",
    category: "bombachas",
    price: 3300,
    image: "/products/colaless-algodon-tira-fina.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "c200cc93-f3cc-44c9-945f-aa403dee94ca", color: "Gris", colorHex: "#9CA3AF", stock: 2, active: true },
      { id: "9ce74695-7adc-4081-a01b-3ffdfefb3053", color: "Negro", colorHex: "#111111", stock: 2, active: true },
      { id: "b0c39333-5cc0-42b3-b9a9-ca79eaebaacf", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
      { id: "5113cd3c-5c6e-4a79-ba8e-17e9ca374cf7", color: "Rojo", colorHex: "#C1121F", stock: 2, active: true },
    ],
  },
  {
    id: "6ba065ff-99be-4724-8823-369ad54ab829",
    name: "Vedetinas (talle 2XL)",
    category: "bombachas",
    price: 4800,
    image: "/products/vedetinas-2xl.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "75a9ed5a-4e6a-4e55-9a00-ac87509b29d3", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
      { id: "759523af-cc89-47a0-84f2-e4e4710a7ca6", color: "Rojo", colorHex: "#C1121F", stock: 2, active: true },
    ],
  },
  {
    id: "527186e5-3e88-4a30-8af2-1bd39b14f9ce",
    name: "Cola less de moño blanca de lycra",
    category: "bombachas",
    price: 3000,
    image: "/products/colaless-mono-blanca.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "1643f4d2-c401-477d-a669-e0cf41505eff", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
    ],
  },
  {
    id: "bfd8fbea-a5e6-4182-85ef-66494dad779e",
    name: "Cola less (talle XL)",
    category: "bombachas",
    price: 3300,
    image: "/products/colaless-xl-roja.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "6e225fc7-a81a-4f16-9004-ec7ae061ca42", color: "Rojo", colorHex: "#C1121F", stock: 2, active: true },
    ],
  },
  {
    id: "d2ef1c98-c600-4d0e-bcc6-17e6e9aa1398",
    name: "Cola less de morley",
    category: "bombachas",
    price: 3300,
    image: "/products/colaless-morley-nueva.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "992c0da4-4855-4b34-a718-daef902b94c5", color: "Gris", colorHex: "#9CA3AF", stock: 2, active: true },
      { id: "4f1d3147-127c-470b-a75f-129c6cf65993", color: "Negro", colorHex: "#111111", stock: 2, active: true },
      { id: "fc83cdc9-b928-49b1-8129-c199c24c65cf", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
    ],
  },
  {
    id: "924cf1dc-f038-47e7-be99-9a6a309d63f3",
    name: "Cola less de algodón (talle 3XL)",
    category: "bombachas",
    price: 4800,
    image: "/products/colaless-3xl-a.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "a99b8ff9-93f8-4c2e-a8e0-0f3487d1631b", color: "Chocolate", colorHex: "#7B4B2A", stock: 2, active: true },
      { id: "c331f6c5-2e91-42c2-8dbd-6e9ec704486a", color: "Beige", colorHex: "#E3D5C3", stock: 2, active: true },
      { id: "2cff760c-6ef8-4688-85eb-94be0ff96431", color: "Natural", colorHex: "#EFE6DA", stock: 2, active: true },
    ],
  },
  {
    id: "4762e4f3-ce9f-48ed-bbcf-b5418c136e2c",
    name: "Cola less de algodón (talle 3XL)",
    category: "bombachas",
    price: 4800,
    image: "/products/colaless-3xl-b.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "5c5788b1-06b5-4f3e-830f-e295f9cfda15", color: "Negro", colorHex: "#111111", stock: 2, active: true },
      { id: "77c02f52-16fd-4e71-9068-24e0449ad1ad", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
    ],
  },
  {
    id: "3eca2556-ec59-4faf-bb36-10128de91cd0",
    name: "Vedetinas (talle XL)",
    category: "bombachas",
    price: 4800,
    image: "/products/vedetinas-xl.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "d90d73b3-5aa9-40c0-b83d-63e1d46c94b8", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
      { id: "b748d22c-5b0e-4dbc-80e1-25b3525f5df4", color: "Natural", colorHex: "#EFE6DA", stock: 2, active: true },
    ],
  },
  {
    id: "b7f21c9a-3e58-4d6b-9a41-2c8e5f07d163",
    name: "Cola less de algodón tira ancha",
    category: "bombachas",
    price: 3800,
    image: "/products/colaless-tira-ancha.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "e0a51f2c-8b3d-4c7a-9e65-1d2f4a6b8c09", color: "Beige", colorHex: "#E3D5C3", stock: 2, active: true },
      { id: "c2d84e1a-5f96-4b3c-a718-7e9d0b2f4a63", color: "Rojo", colorHex: "#C1121F", stock: 2, active: true },
      { id: "f6b39c7d-2a48-4e51-8d90-3c5e7a1f9b24", color: "Blanco", colorHex: "#FFFFFF", stock: 2, active: true },
      { id: "a4e18b6f-9c52-4d37-b6e1-5f8a2c4d7e10", color: "Natural", colorHex: "#EFE6DA", stock: 2, active: true },
      { id: "d9c27e4b-6f13-4a85-9c2e-8b1d3f5a7e96", color: "Negro", colorHex: "#111111", stock: 2, active: true },
    ],
  },
  {
    id: "8bff7687-5e24-495a-8805-5b13002eaddf",
    name: "Vedetina de lycra",
    category: "bombachas",
    price: 3700,
    image: "/products/vedetina-lycra.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "6f7aff37-569b-4496-a78d-298459d063e7", color: "Único", colorHex: null, stock: 1, active: true },
    ],
  },
  {
    id: "a56ed4fb-5b33-420f-a383-6e76dc3c4870",
    name: "Medias invisibles",
    category: "medias",
    price: 2200,
    image: "/products/invisibles.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "0c840762-2bd7-4d4d-a441-45d5e9bd03f6", color: "Blanco", colorHex: "#FFFFFF", stock: 1, active: true },
      { id: "4d7a2f18-6b95-4c3e-9a07-2e8d1b6f5c39", color: "Gris Claro", colorHex: "#D1D5DB", stock: 1, active: true },
      { id: "9e5b8c30-1f46-4a72-b5d9-7c2e4a8f0d61", color: "Gris Negro", colorHex: "#374151", stock: 1, active: true },
      { id: "6c1f9e47-3a28-4d5b-8e14-0b9f2c7a5d83", color: "Gris Oscuro", colorHex: "#4B5563", stock: 1, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a1",
    name: "Medias largas (dufour)",
    category: "medias",
    price: 3000,
    image: "/products/medias-dufour.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-000000000001", color: "Negro", colorHex: "#111111", stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000002", color: "Gris", colorHex: "#9CA3AF", stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000003", color: "Blanco", colorHex: "#FFFFFF", stock: 10, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a2",
    name: "Soquetes (unisex)",
    category: "medias",
    price: 3600,
    image: "/products/soquetes-unisex-skman.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-000000000004", color: "Blanco/Gris", colorHex: null, stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000005", color: "Gris/Negro", colorHex: null, stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000006", color: "Negro/Gris", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a3",
    name: "Soquetes elemento (unisex)",
    category: "medias",
    price: 3800,
    image: "/products/soquetes-elemento.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-000000000007", color: "Gris", colorHex: "#9CA3AF", stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000008", color: "Negro", colorHex: "#111111", stock: 10, active: true },
      { id: "22222222-0000-4000-8000-000000000009", color: "Blanco", colorHex: "#FFFFFF", stock: 10, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a4",
    name: "Media 3/4 blanca",
    category: "medias",
    price: 3000,
    image: "/products/media-34-blanca-altomax.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-00000000000a", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a5",
    name: "Medias 3/4 elemento",
    category: "medias",
    price: 4400,
    image: "/products/medias-34-elemento-1.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-00000000000b", color: "Lila", colorHex: "#C4A7D7", stock: 1, active: true },
      { id: "22222222-0000-4000-8000-00000000000c", color: "Blanca", colorHex: "#FFFFFF", stock: 1, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a6",
    name: "Medias 3/4 elemento",
    category: "medias",
    price: 4400,
    image: "/products/medias-34-elemento-2.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-000000000010", color: "Gris", colorHex: "#9CA3AF", stock: 1, active: true },
      { id: "22222222-0000-4000-8000-000000000011", color: "Blanca", colorHex: "#FFFFFF", stock: 1, active: true },
    ],
  },
  {
    id: "11111111-0000-4000-8000-0000000000a7",
    name: "Medias 3/4 elemento",
    category: "medias",
    price: 4400,
    image: "/products/medias-34-elemento-3.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "22222222-0000-4000-8000-000000000012", color: "Blanca", colorHex: "#FFFFFF", stock: 1, active: true },
      { id: "22222222-0000-4000-8000-000000000013", color: "Gris", colorHex: "#9CA3AF", stock: 1, active: true },
      { id: "22222222-0000-4000-8000-000000000014", color: "Rosa", colorHex: "#F4A7C3", stock: 1, active: true },
    ],
  },
  {
    id: "ae133d32-35dc-466a-88b4-c8188756c460",
    name: "Lip oil (gloss)",
    category: "maquillaje",
    price: 4500,
    image: "/products/maq-lip-oil-rosa.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "4cb427d7-dfb8-439c-8e44-e245768494e9", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "c3fc0034-aac2-4080-8faa-bb7a400eef3c",
    name: "Mini contorno",
    category: "maquillaje",
    price: 3000,
    image: "/products/maq-mini-contorno.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "5631be62-ba16-4903-89f9-e37337153dc7", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "443594ba-691b-4d58-aea7-79e73e82b760",
    name: "Lápiz labial",
    category: "maquillaje",
    price: 3500,
    image: "/products/maq-lapiz-labial.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "d0dfd291-5611-425e-a37b-2c0cb396adf8", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "442ea9ff-50d1-47ba-ae10-d98ae6eb2dc2",
    name: "Base (tono claro)",
    category: "maquillaje",
    price: 4500,
    image: "/products/maq-base-claro.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "e1d4529e-9adf-4beb-86e6-666785b5446d", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "8c275ee2-8b9d-4dd0-9efc-32c380b0c755",
    name: "Iluminador",
    category: "maquillaje",
    price: 3500,
    image: "/products/maq-iluminador.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "40f753f8-04ef-4e3b-98ef-51f7d538524c", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "090d588e-a12c-400f-a0ae-e302e19072a3",
    name: "Lip oil (gloss)",
    category: "maquillaje",
    price: 4500,
    image: "/products/maq-lip-oil-verde.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "e4d8f98c-dda1-4661-8299-dd27015bb209", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "0979f7e2-3a42-47e9-881d-2d8404c71f36",
    name: "Rímel con ácido hialurónico",
    category: "maquillaje",
    price: 4000,
    image: "/products/maq-rimel-hialuronico.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "40f78dc7-f135-41ff-846a-59a301bcb40e", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "9500e876-491d-4616-baaa-f8dcf43ac43b",
    name: "Máscara de pestañas",
    category: "maquillaje",
    price: 7000,
    image: "/products/maq-mascara-pestanas.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "d8c759ff-477b-4f55-99e7-c0f361ca7013", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "f2dbd7e8-0661-490b-8437-e68743ef9d53",
    name: "Toallitas desmaquillantes",
    category: "maquillaje",
    price: 5000,
    image: "/products/maq-toallitas.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "ea630ffd-12f7-4fe3-b1a0-26fa41cf8cfd", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "e113d14e-db3f-42d0-8943-5aa2d995879b",
    name: "Máscara para labios",
    category: "maquillaje",
    price: 1200,
    image: "/products/maq-mascara-esponjitas.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "743534bf-a677-43d5-9540-aa3595b769c4", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "8c415b14-6f0f-45ae-981f-19115694e68c",
    name: "Sérum (de frutilla)",
    category: "maquillaje",
    price: 9000,
    image: "/products/maq-serum-frutilla.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "d610df32-28cb-4fba-904b-4e5cc260a200", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "63b5b08a-ac9e-4a75-a84b-73f6af2a5670",
    name: "Polvo de hadas",
    category: "maquillaje",
    price: 3500,
    image: "/products/maq-polvo-hadas.jpeg",
    featured: true,
    active: true,
    variants: [
      { id: "42437bb2-8986-41d3-a66a-26a75cf1a8f4", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "018b0ed9-6e87-4db3-a145-ae8996a539ac",
    name: "Cuellitos",
    category: "accesorios",
    price: 3000,
    image: "/products/cuellitos.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "12a9ccfa-2565-48f9-a351-9fe712ee1fde", color: "Único", colorHex: null, stock: 20, active: true },
    ],
  },
  {
    id: "3a9515f8-f5e8-4ba2-93e3-aef60d71c280",
    name: "Ruana",
    category: "accesorios",
    price: 15000,
    image: "/products/ruana.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "41db71be-7281-445b-bc2d-5bc16e49e8df", color: "Único", colorHex: null, stock: 9, active: true },
    ],
  },
  {
    id: "af409581-7646-41fe-83b8-fa3c4d9e600e",
    name: "Bufanda (chocolate)",
    category: "accesorios",
    price: 9500,
    image: "/products/bufanda-chocolate.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "e8895d19-c4f4-417b-99e9-2046e7c7c5e2", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "fe6c9233-fcca-4bac-9b96-71c72e98417c",
    name: "Bufanda (negra)",
    category: "accesorios",
    price: 9500,
    image: "/products/bufanda-negra.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "26838cbd-91cf-428f-8135-210056fe8688", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
  {
    id: "91f30255-74b9-4141-b39a-7ec37317faa4",
    name: "Bufanda (gris)",
    category: "accesorios",
    price: 9500,
    image: "/products/bufanda-gris.jpeg",
    featured: false,
    active: true,
    variants: [
      { id: "61f67569-d105-42d8-aec9-7ac86ba69a23", color: "Único", colorHex: null, stock: 10, active: true },
    ],
  },
];

export const PRODUCTS_BY_CATEGORY = PRODUCTS.reduce<Record<string, ProductData[]>>(
  (acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  },
  {},
);

export function totalStock(p: ProductData): number {
  return p.variants.reduce((n, v) => n + (v.active ? v.stock : 0), 0);
}
