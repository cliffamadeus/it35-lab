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
import { useState } from "react";
import feed from "./feed.json"; 

const SearchContainer: React.FC = () => {
  const [results, setResults] = useState([...feed]);

  const handleInput = (event: CustomEvent) => {
    const query = event.detail.value?.toLowerCase() || "";
    setResults(feed.filter((d) => d.title.toLowerCase().includes(query)));
  };

  return (
    <div id="container">
      <IonSearchbar debounce={100} onIonInput={handleInput}></IonSearchbar>

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
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center"}}>
              <IonButton fill="clear" routerLink={`/it35-lab/app/home/feed/article/${item.id}`}>
                See Details
              </IonButton>
            </div>
          </IonCard>
        ))}
      </IonList>
    </div>
  );
};

export default SearchContainer;