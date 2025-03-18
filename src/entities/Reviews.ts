import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Movies } from "./Movies";

@Index("movie_id_idx", ["movieId"], {})
@Entity("reviews", { schema: "movies" })
export class Reviews {
  @PrimaryGeneratedColumn({ type: "int", name: "review_id" })
  reviewId: number;

  @Column("int", { name: "rating" })
  rating: number;

  @Column("text", { name: "comment" })
  comment: string;

  @Column("int", { name: "movie_id" })
  movieId: number;

  @ManyToOne(() => Movies, (movies) => movies.reviews, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movies;
}
