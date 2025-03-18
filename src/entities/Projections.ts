import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Movies } from "./Movies";
import { Tickets } from "./Tickets";

@Index("movie_id_idx", ["movieId"], {})
@Entity("projections", { schema: "movies" })
export class Projections {
  @PrimaryGeneratedColumn({ type: "int", name: "projection_id" })
  projectionId: number;

  @Column("decimal", { name: "price", precision: 10, scale: 2 })
  price: string;

  @Column("datetime", { name: "date" })
  date: Date;

  @Column("int", { name: "movie_id" })
  movieId: number;

  @ManyToOne(() => Movies, (movies) => movies.projections, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movies;

  @OneToMany(() => Tickets, (tickets) => tickets.projection)
  tickets: Tickets[];
}
