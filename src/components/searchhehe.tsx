import { 
    IonSearchbar, 
    IonList, 
    IonCard, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCardContent, 
    IonButton, 
    IonIcon 
  } from "@ionic/react";
  import { bookmark, bookmarkOutline } from "ionicons/icons"; // Import Bookmark Icons
  import { useState, useEffect } from "react";
  import feed from "./feedData.json"; // Import JSON directly
  
  const SearchContainer: React.FC = () => {
    const [results, setResults] = useState([...feed]);
    const [favorites, setFavorites] = useState<string[]>([]);
  
    // Load favorites from localStorage
    useEffect(() => {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(savedFavorites);
    }, []);
  
    // Save favorites to localStorage whenever updated
    useEffect(() => {
      console.log("Saving to localStorage:", favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
  
    // Handle search input
    const handleInput = (event: CustomEvent) => {
      const query = event.detail.value?.toLowerCase() || "";
      setResults(feed.filter((d) => d.title.toLowerCase().includes(query)));
    };
  
    // Toggle Favorite Status
    const toggleFavorite = (id: string) => {
      setFavorites((prevFavorites) => {
        const newFavorites = prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id) // Remove if exists
          : [...prevFavorites, id]; // Add if not exists
  
        console.log("Updated Favorites:", newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Save immediately
        return newFavorites;
      });
    };
  
    return (
      <div id="container">
        <IonSearchbar debounce={500} onIonInput={handleInput}></IonSearchbar>
  
        <IonList>
          {results.map((item) => (
            <IonCard key={item.id}>
              <IonCardHeader>
                <IonCardSubtitle>{item.author}, {item.date}</IonCardSubtitle>
                <IonCardTitle>{item.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {item.description}
              </IonCardContent>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <IonButton fill="clear" routerLink={`/it35-lab/app/home/feed/article/${item.id}`}>
                  See Details
                </IonButton>
                {/* Bookmark Icon for Adding/Removing Favorites */}
                <IonButton fill="clear" onClick={() => toggleFavorite(item.id)}>
                  <IonIcon 
                    icon={favorites.includes(item.id) ? bookmark : bookmarkOutline} 
                    color={favorites.includes(item.id) ? "primary" : "medium"} 
                    size="large"
                  />
                </IonButton>
              </div>
            </IonCard>
          ))}
        </IonList>
      </div>
    );
  };
  
  export default SearchContainer;
  