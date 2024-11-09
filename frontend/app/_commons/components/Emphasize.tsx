function Emphasize({ children }: { children: string }) {
	return (
		<strong className="font-semibold text-text-emphasis dark:text-text-emphasis-dark">
			{children}
		</strong>
	);
}

export default Emphasize;