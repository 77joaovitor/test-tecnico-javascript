import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITechInformation {
  descricao: string;
  titulo: string;
}

export interface IProduct {
  decricaoCurta: string;
  descricaoLonga: string;
  exclusivo: boolean;
  fichaTecnica: ITechInformation[];
  id: number;
  imagem: string;
  nome: string;
  promocao: boolean;
  valor: number;
}

export interface IContextFuncs {
  product: IProduct[] | never[];
  setProduct: any;
  likeProduct: IProduct[] | never[];
  setLikeProduct: any;
  inputSeach: string;
  setInputSeach: any;
  openProductDetail: Array<number | string>;
  setOpenProductDetail: Dispatch<SetStateAction<Array<number | string>>>;
  productDetail: IProduct | null;
  setProductDetail: Dispatch<SetStateAction<any>>;
}

export interface IContext {
  children: ReactNode;
}

export interface ICard {
  card: IProduct;
}
