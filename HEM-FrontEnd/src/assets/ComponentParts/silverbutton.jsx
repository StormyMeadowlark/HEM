export default function SilverButton({text = "I'm Empty Fill Me"}) {

    return (
        <button className="relative silverbg45 w-full text-center shadow-inner shadow-hemautoGreen hover:shadow-hemautoGray rounded-sm px-4 py-6 silverbuttonhover text-hemautoWhite hover:text-hemautoGreen text-shadow-hemautoGray skew-x-[30deg]">
          <div className="skew-x-[-30deg]">{text}</div>
        </button>
    );
}



