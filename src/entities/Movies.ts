import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Projections } from "./Projections";
import { Reviews } from "./Reviews";

@Entity("movies", { schema: "movies" })
export class Movies {
  @PrimaryGeneratedColumn({ type: "int", name: "movie_id" })
  movieId: number;

  @Column("varchar", { name: "name", length: 45 })
  name: string;

  @Column("varchar", { name: "genre", length: 45 })
  genre: string;

  @Column("varchar", { name: "date_of_release", length: 45 })
  dateOfRelease: string;

  @Column("varchar", { name: "movie_director", length: 45 })
  movieDirector: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("varchar", { name: "image_url", length: 45 })
  imageUrl: string;

  @OneToMany(() => Projections, (projections) => projections.movie)
  projections: Projections[];

  @OneToMany(() => Reviews, (reviews) => reviews.movie)
  reviews: Reviews[];
}
