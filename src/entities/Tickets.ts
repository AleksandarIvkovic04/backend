import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";
import { Projections } from "./Projections";

@Index("fk_tikets_cart_id_idx", ["cartId"], {})
@Index("fk_tickets_projection_id_idx", ["projectionId"], {})
@Entity("tickets", { schema: "movies" })
export class Tickets {
  @PrimaryGeneratedColumn({ type: "int", name: "ticket_id" })
  ticketId: number;

  @Column("int", { name: "cart_id" })
  cartId: number;

  @Column("int", { name: "projection_id" })
  projectionId: number;

  @Column("varchar", { name: "status", length: 45 })
  status: string;

  @ManyToOne(() => Cart, (cart) => cart.tickets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "cartId" }])
  cart: Cart;

  @ManyToOne(() => Projections, (projections) => projections.tickets, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "projection_id", referencedColumnName: "projectionId" }])
  projection: Projections;
}
