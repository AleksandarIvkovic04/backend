import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Tickets } from "./Tickets";

@Index("fk_cart_user_id_idx", ["userId"], {})
@Entity("cart", { schema: "movies" })
export class Cart {
  @PrimaryGeneratedColumn({ type: "int", name: "cart_id" })
  cartId: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("decimal", {
    name: "sum_of_tikets",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  sumOfTikets: string;

  @ManyToOne(() => User, (user) => user.carts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @OneToMany(() => Tickets, (tickets) => tickets.cart)
  tickets: Tickets[];
}
