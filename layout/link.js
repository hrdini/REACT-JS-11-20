const url = "http://localhost:8000/api";
        let token = "66JEOajF2u8OhxaAldNEx2QRiM4VDACvNIcgsFgY";

        export const link = axios.create({
            baseURL: url,
            headers: {
                'api_token': token
            }
        });