package com.campus.event.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String date;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    private String clubName;
    private String status;
    @Column(columnDefinition = "TEXT")
    private String imageUrl;

    // No-args constructor
    public Event() {}

    // All-args constructor
    public Event(Long id, String title, String date, String description, String clubName, String status, String imageUrl) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.clubName = clubName;
        this.status = status;
        this.imageUrl = imageUrl;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getClubName() { return clubName; }
    public void setClubName(String clubName) { this.clubName = clubName; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
