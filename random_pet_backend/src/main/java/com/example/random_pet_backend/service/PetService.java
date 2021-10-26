package com.example.random_pet_backend.service;

import com.example.random_pet_backend.entity.Pet;

import java.util.List;

public interface PetService {
    List<Pet> findAll();
    Object findById(int petId);
    void saveOrUpdate(Pet thePet);
    void deleteById(int petId);
}
