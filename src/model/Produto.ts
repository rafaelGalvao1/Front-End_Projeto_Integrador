import Categoria from './Categoria'
import Usuario from './Usuario';

interface Produto{
    id: number;
    nome: string;
    descricao: string;
    foto: string
    preco: number,
    validade: string,
    regiao: string,
    fornecedor: string,
    unidade_de_medida: string,
    quantidade: number,
    categoria?: Categoria| null
    usuario?: Usuario | null //linha adicionada para vincular um usuário
}

export default Produto;