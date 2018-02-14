defmodule Memory.Game do

  def new do
    %{
      originalList: generateOriginalList(),
      tileList: generateOriginalList(),
      socre: 0,
      flippedTiles: [],
      message: "",
    }
  end

  def generateOriginalList do
    list = [A, B, C, D, E, F, G, H, A, B, C, D, E, F, G]

    list
    |> Enum.map(fn(x) -> %{:value => x, :show => false, :found => false} end)
  end

  def client_view(game) do
    %{
      originalList: generateOriginalList(),
      tileList: [],
      socre: 0,
      flippedTiles: [],
      message: "",
    } 
  end

  def tileClick(game, index, tileList, flippedTiles) do
    IO.inspect(tileList)
  end

end
