package com.example.random_pet_backend.service;

import com.example.random_pet_backend.dao.PetDAO;
import com.example.random_pet_backend.entity.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceIMPL implements PetService {

    // Injecting the pet dao layer
    private final PetDAO petDAO;

    @Autowired
    public PetServiceIMPL(PetDAO petDAO) {
        this.petDAO = petDAO;
    }

    @Override
    public List<Pet> findAll() {
        return petDAO.findAll();
    }

    @Override
    public Object findById(int petId) {
        return petDAO.findById(petId);
    }

    @Override
    public void saveOrUpdate(Pet thePet) {
        petDAO.saveOrUpdate(thePet);
    }

    @Override
    public void deleteById(int petId) {
        petDAO.deleteById(petId);
    }
}
