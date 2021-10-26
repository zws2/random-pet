package com.example.random_pet_backend.dao;

//IMPORTANT If your code is not working your imports might be incorrect

import com.example.random_pet_backend.entity.Pet;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PetIMPL implements PetDAO {

    //Define field for entity manager
    /*The EntityManager API is used to create and remove persistent entity instances,
        to find entities by their primary key, and to query over entities. */
    private final EntityManager entityManager;

    //Set up constructor injection
    @Autowired
    public PetIMPL(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public List<Pet> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Pet> myQuery = currentSession.createQuery("from Pet");
        return myQuery.getResultList();
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public Pet findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        return currentSession.get(Pet.class, theId);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void saveOrUpdate(Pet thePet) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(thePet);
    }

    @Override
    @Transactional //Defines the scope of a single database transaction.
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Pet myPet = currentSession.get(Pet.class, theId);
        currentSession.delete(myPet);
    }
}
