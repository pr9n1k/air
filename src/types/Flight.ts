export interface Flight {
  flight: {
    carrier: {
      uid: string;
      caption: string;
      airlineCode: string;
    };
    price: {
      total: {
        amount: string;
        currency: string;
        currencyCode: string;
      };
    };
    legs: {
      segments: {
        arrivalAirport: {
          uid: string;
          caption: string;
        };
        arrivalCity: {
          uid: string;
          caption: string;
        };
        arrivalDate: string;
        departureAirport: {
          uid: string;
          caption: string;
        };
        departureCity: {
          uid: string;
          caption: string;
        };
        departureDate: string;
      }[];
    }[];
  };
}
