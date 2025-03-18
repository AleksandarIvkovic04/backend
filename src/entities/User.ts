import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";

@Index("email_UNIQUE", ["email"], { unique: true })
@Entity("user", { schema: "movies" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id" })
  userId: number;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "surname", nullable: true, length: 45 })
  surname: string | null;

  @Column("varchar", { name: "email", unique: true, length: 45 })
  email: string;

  @Column("varchar", { name: "password", length: 45 })
  password: string;

  @Column("varchar", { name: "adress", nullable: true, length: 45 })
  adress: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 45 })
  phone: string | null;

  @Column("date", { name: "date_of_birth", nullable: true })
  dateOfBirth: string | null;

  @Column("varchar", {
    name: "favorite_type_of_movie",
    nullable: true,
    length: 45,
  })
  favoriteTypeOfMovie: string | null;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
