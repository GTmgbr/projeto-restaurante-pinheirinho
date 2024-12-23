import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import PedidoORM from "./PedidoORM";

@Entity("produto")
export default class ProdutoORM {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    estoque!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    preco!: number;

    @ManyToMany(() => PedidoORM, pedido => pedido.produtos)
    pedidos!: PedidoORM[];
}
