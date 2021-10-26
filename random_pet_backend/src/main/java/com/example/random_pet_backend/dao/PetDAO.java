package com.example.random_pet_backend.dao;

import com.example.random_pet_backend.entity.Pet;

import java.util.List;

public interface PetDAO {
    List<Pet> findAll();
    Object findById(int theId);
    void saveOrUpdate(Pet thePet);
    void deleteById(int theId);
}
