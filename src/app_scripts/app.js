

class ConvesorTemperatura {
    converte(value) {
        throw new Error('converte() deve ser implementada');
    }
}


class CelsiusToFahrenheitConverter extends ConvesorTemperatura {
    converte(value) {
        return {
            value: Math.round(value * 1.8 + 32),
            unit: '°F'
        };
    }
}