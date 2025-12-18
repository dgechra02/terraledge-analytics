// @ts-nocheck
import { useEffect, useState } from "react";

export default function AnimateValue({ value, duration, prefix, suffix }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let numericValue = typeof value === 'string'
            ? parseFloat(value.replace(/[$,%MK]/g, ''))
            : value;
        const startTime = Date.now();
        const endTime = startTime + duration;

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = numericValue * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, [value, duration]);

    const formatValue = (val) => {
        const strValue = typeof value === 'string' ? value : String(value);

        const decimalMatch = strValue.match(/\d+\.(\d+)/);
        const decimalPlaces = decimalMatch ? decimalMatch[1].length : 0;

        if (decimalPlaces > 0) {
            return val.toFixed(decimalPlaces);
        } else {
            return Math.round(val).toLocaleString();
        }
    };

    return (
        <p className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {prefix}{formatValue(count)}{suffix}
        </p>

    );
}