class Array

  def my_map(&prc)
    result = []
    self.each do |el|
      result << prc.call(el)
    end
    result
  end

end

[5,1,4,2,3]
i = 3
j = 4
arr[i] = 5
arr[j] = 4
[1,2,3,4,5]
