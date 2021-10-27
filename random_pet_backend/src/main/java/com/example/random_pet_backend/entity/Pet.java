package com.example.random_pet_backend.entity;

import javax.persistence.*;
import java.sql.Blob;

//Pet Entity
@Entity //This will let Java know that this is an entity that we are going to map to a database table.
@Table(name = "pet") //This is for the actual name of the database table we are mapping to the class.
public class Pet {

    //Define fields
    @Id //This will map the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This will auto increment your primary key
    @Column(name = "id") //This is mapping the primary key to the id column in the table.
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "caption")
    private String caption;

    @Column(name = "contributor")
    private String contributor;

    @Column(name = "img")
    private Blob img;

    //default constructor
    public Pet() {
    }

    public Pet(int id, String title, String caption, String contributor, Blob img) {
        this.id = id;
        this.title = title;
        this.caption = caption;
        this.contributor = contributor;
        this.img = img;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", caption='" + caption + '\'' +
                ", contributor='" + contributor + '\'' +
                ", img=" + img +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getContributor() {
        return contributor;
    }

    public void setContributor(String contributor) {
        this.contributor = contributor;
    }

    public Blob getImg() {
        return img;
    }

    public void setImg(Blob img) {
        this.img = img;
    }
}
