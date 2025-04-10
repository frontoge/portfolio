
export interface PillProps {
    icon?: string;
    color?: string;
    className?: string;
}

export default function Pill({ icon, color, className }: PillProps) {
    return (
        <div className={className ?? "pill"} style={{ backgroundColor: color }}>
            {icon && <img src={icon} style={{height: "100%", width: "auto"}} alt="Icon" />}
        </div>
    );
}