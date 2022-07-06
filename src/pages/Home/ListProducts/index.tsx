import styles from './index.module.css';

export default function ListProducts() {
    const category = [
        {name: "Café Quente"},
        {name: "Café Frio"},
        {name: "Café Frio"},
        {name: "Café Frio"},
        {name: "Café Frio"},
    ]

    return (
        <div className={styles.listItem}>
            <div className={styles.drinks}>
                <span>Drinks</span>
                <div></div>
            </div>
            <div>
                <div className={styles.divDrink}>
                    <div className={styles.divImg}>
                        <img className={styles.imgCategory} src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"/>
                    </div>
                    <span>Dsa</span>
                </div>
                <div className={styles.divDrink}>
                    <div className={styles.divImg}>
                        <img className={styles.imgCategory} src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"/>
                    </div>
                    <span>Dsa</span>
                </div>
                <div className={styles.divDrink}>
                    <div className={styles.divImg}>
                        <img className={styles.imgCategory} src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"/>
                    </div>
                    <span>Dsa</span>
                </div>
                <div className={styles.divDrink}>
                    <div className={styles.divImg}>
                        <img className={styles.imgCategory} src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"/>
                    </div>
                    <span>Dsa</span>
                </div>
                <div className={styles.divFinal}></div>
            </div>
        </div>
    );
}