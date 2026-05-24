

class ConvesorTemperatura {
    converte(value) {
        throw new Error('converte() deve ser implementada');
    }
}


class CelsiusEmFahrenheit extends ConvesorTemperatura {
    converte(value) {
        return {
            value: Math.round(value * 1.8 + 32),
            unit: '°F'
        };
    }
}