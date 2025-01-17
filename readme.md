# Zmiany w stronie internetowej
1. Podział skryptów i arkuszy styli na osobne foldery.
2. Zmieniony wygląd stopki.
3. Background dla navbara jest responsywny nie zależnie od rozdzielczości wyświetlacza/monitora.
4. Dodane parę skryptów JS (goToPage.js, scrollUp oraz scrollToElement.js)(opisy plików w komentarzach wewnątrz skryptów)
5. Dodany główny arkusz styli ```index.css```, importowane są w nim wszystkie arkusze css. Jest to jedyny arkusz podpięty do HTMLa.
6. Bardziej uporządkowany kod HTMLa oraz zastąpienie znaczników `<a>` znacznikami `<span>` (były one używane niepotrzebnie, nawet kiedy tekst nie był odnośnikiem).
7. Divy są same w sobie odnośnikami poprzez skrypt JavaScriptu (nie używają znaczników `<a>`).
8. Dodana klasa css `pointer` dodaje ona styl dla znacznika `<span>` zmienia on atrybut `cursor` na `pointer`.