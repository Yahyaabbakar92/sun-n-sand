"use client";
import { ReactLenis } from '@studio-freight/react-lenis'

const SmoothScrolling = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ReactLenis root options={{ lerp: 0.3, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling