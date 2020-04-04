# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
    -wybór daty i godziny
    - tabelę z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawierza wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analogicznie do powyżeszej, bez początkowych infromacji
- `/tables/events/:id`
    - analogicznie do powyżeszej, dla eventów
- `/tables/events/new`
    - analogicznie do powyżeszej, dla eventów, bez początkowych infromacji 

# Widok kelnera

- `/waiter`
    - tabela 
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika 
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
- `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

- `/kitchen`
    - wyświeta listę zamówień w kolejności ich złożenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego) 
        - pełne informacje dot. zamówionych dań
    - na liście musi być możliwość ozaneczenia zamówienia jako zrealizowane