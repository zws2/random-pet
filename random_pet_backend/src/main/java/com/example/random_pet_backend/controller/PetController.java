package com.example.random_pet_backend.controller;

import com.example.random_pet_backend.entity.Pet;
import com.example.random_pet_backend.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//This is to allow calls from React... NOT IMPORTANT RIGHT NOW
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class PetController {

    private final PetService petService;

    //Constructor Injection: this is telling the spring framework to wire up your
    //dependencies for the petService.
    @Autowired
    public PetController(@Qualifier("petServiceIMPL")PetService petService) {
        this.petService = petService;
    }

    //This is a GET request that will read a list of all the pets.
    //http://localhost:8080/retrieveAllPets
    @GetMapping("/retrieveAllPets")
    public List<Pet> findAll() {
        return petService.findAll();
    }

    @GetMapping("/retrievePet/{petId}")
    public Pet findPet(@PathVariable int petId) {
        return (Pet)petService.findById(petId);
    }

    //This is a POST request to add a new pet.
    //http://localhost:8080/addPet
    @PostMapping("/addPet")
    public Pet addPet(@RequestBody Pet thePet) {
        //also, just in case they pass an id in JSON .... set id to 0
        //this is to force a save of new item .... instead of update
        thePet.setId(0);

        //This will call the petDqoImpl.save method to save a new pet
        //through the petService
        petService.saveOrUpdate(thePet);
        return thePet;
    }

    //This is a PUT request to update an existing pet.
    //http://localhost:8080/updatePet
    @PutMapping("/updatePet")
    public Pet updatePet(@RequestBody Pet updatePet) {
        //Notice thePet.setId(0); this will execute an update instead of a create
        petService.saveOrUpdate(updatePet);
        return updatePet;
    }

    //This is a DELETE request to delete an existing pet.
    //http://localhost:8080/deletePet/1
    @DeleteMapping("/deletePet/{petId}")
    public String deletePet(@PathVariable int petId) {
        //This will execute the deleteByID.
        petService.deleteById(petId);
        return "Deleted pet id : " + petId;
    }

}
