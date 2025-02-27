import { 
  IonSearchbar, 
  IonList, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardContent, 
  IonButton 
} from "@ionic/react";
import { useState } from "react";
import feed from "./feedData.json"; // Import JSON directly

const SearchContainer: React.FC = () => {
  const [results, setResults] = useState([...feed]);

  // Handle search input
  const handleInput = (event: CustomEvent) => {
    const query = event.detail.value?.toLowerCase() || "";
    setResults(feed.filter((d) => d.title.toLowerCase().includes(query)));
  };

  return (
    <div id="container">
      <IonSearchbar debounce={500} onIonInput={handleInput}></IonSearchbar>

      <IonList>
        {results.map((item, index) => (
          <IonCard key={index}>
            <IonCardHeader>
              <IonCardSubtitle>{item.author}, {item.date}</IonCardSubtitle>
              <IonCardTitle>{item.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{item.description}</IonCardContent>
            <IonButton fill="clear" routerLink={`/it35-lab/app/home/feed/article/${item.id}`}>
              See Details
            </IonButton>
          </IonCard>
        ))}
      </IonList>
    </div>
  );
};

export default SearchContainer;
