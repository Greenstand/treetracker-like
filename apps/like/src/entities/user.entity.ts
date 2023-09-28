import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @OneToMany(() => Post, (post) => post.creator)
  createdPosts: Post[];
  
  @ManyToMany(() => Post)
  @JoinTable()
  likedPosts: Post[];
}