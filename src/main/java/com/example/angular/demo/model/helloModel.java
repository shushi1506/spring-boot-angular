package com.example.angular.demo.model;

/**
 * @author tuananh 1/4/2018
 * angular
 * com.example.angular.demo.model
 */
public class helloModel {
    private String id;
    private String name;

    public helloModel() {
        this.id="1";
        this.name="anh";
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public helloModel(String id, String name) {
        this.id = id;
        this.name = name;
    }
}
