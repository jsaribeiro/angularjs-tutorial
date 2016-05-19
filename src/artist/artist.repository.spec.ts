
//import bla from './artist.repository.ts';
import {ArtistRepository} from './artist.repository.ts';
import {Artist} from './artist.model.ts';
import '../index.ts'

describe('The Artist repository', () => {
    
    let artistRepo: ArtistRepository;

    beforeEach(() => {
        artistRepo = new ArtistRepository();        
        artistRepo.create(new Artist("Amy Winehouse", "app/images/artist/winehouse.jpg"));
        artistRepo.create(new Artist("Portishead", "app/images/artist/portishead.jpg"));
        artistRepo.create(new Artist("The Velvet Underground", "app/images/artist/the-velvet-underground.jpg"));
        artistRepo.create(new Artist("Roxy Music", "app/images/artist/roxy-music.jpg"));
        artistRepo.create(new Artist("The Doors", "app/images/artist/the-doors.jpg"));
    });

    it("should support creating new artists", () => {
        artistRepo.create(new Artist("The Streets"));
        expect(artistRepo.getAll().length).toBe(6);
    });

    it("should support finding artists by their ID", () => {
        expect(artistRepo.findById(0)).toBeDefined();
        expect(artistRepo.findById(42)).toBeUndefined();
    });

    // FIXME: Properly implement findByName in InMemoryRepository class
    it("should allow filtering artists by part of their name", () => {
        expect(artistRepo.findByName("The").length).toBe(2);
        expect(artistRepo.findByName(undefined).length).toBe(5);
        expect(artistRepo.findByName("").length).toBe(5);
    });

});

